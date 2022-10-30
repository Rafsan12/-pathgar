import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import auth from './../../firebase.init';
import useToken from './../../hook/useToken';


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    //email handle
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    //password handle
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmail(userInfo.email, userInfo.password);

    }

    //password reset show in toast
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, userInfo.email)
            .then(() => {
                toast('email sent');
            })
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const [token] = useToken(user || googleUser)
    useEffect(() => {
        if (token) {
            navigate(from);
        }
    }, [token]);


    //error show in toast
    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} required />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="Password" onChange={handlePasswordChange} required />
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <button className="my-button">Login</button>

                <ToastContainer />
                <br />
                <p>Don't have an account? <Link className="hover:underline font-bold" to="/signup"> Sign up</Link> </p>

                <button className="btn btn-link no-underline" onClick={handlePasswordReset}>Forget password?</button>

            </form>

            <button className="my-button" onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;