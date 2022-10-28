import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const [signInWithFacebook, userFB, loadingFB, errorFB] = useSignInWithFacebook(auth);

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    let loadingCom;
    if (loading || loading1 || loadingFB) {
        loadingCom = <button class="btn loading">loading</button>
    }

    let signError;
    if (error || error1 || errorFB) {
        signError = <p className='text-red-500'>{error?.message || error1?.message}</p>
    }

    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; 
    if (user || user1 || userFB) { 
        navigate(from, { replace: true }) 
    }

    // if (user || user1 || userFB) {
    //     navigate('/home')
    // }
    return (
        <div>
            <div className="card flex justify-center items-center min-h-screen w-lg bg-base-100 shadow-xl">
                <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                    {loadingCom}
                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Log In</h2>
                        <hr style={{ border: "3px solid #A992F7", width: "100px", display: "flex", margin: "auto", marginBottom: "20px", borderRadius: "10px" }} />
                        <div className="form-control">
                            <div onSubmit={handleSubmit(onSubmit)}>
          
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div className="card flex-shrink-0 w-full max-w shadow-2xl bg-base-100">
                        {loadingCom}
                        <div className="card-body">
                            <div className="form-control">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="email" placeholder="email" className="input input-bordered mb-3"
                                    {...register("email", { required: true })}
                                    aria-invalid={errors.email ? "true" : "false"} />
                                {errors.email?.type === 'required' && <p className='text-red-500' role="alert"> Email is required</p>}
                                <input type="password" placeholder="password" className="input input-bordered w-full"
                                    {...register("password", { required: true })}
                                    aria-invalid={errors.password ? "true" : "false"} />
                                {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-outline"><i className="fa-solid fa-arrow-right font-bold text-black-500 mr-3"></i>Login</button>
                                </div>
                                <p className='mt-2 text-sm'>Don't have an account? <Link to='/register' className='text-green-600 hover:underline ml-2'>Create Account </Link></p>
                            </form>
                            <div class="divider text-sm ">OR</div>
                            <button onClick={() => signInWithGoogle()} class="btn btn-outline p-3">
                                <i className="fa-brands fa-google mr-2 font-bold text-sky-500"></i>
                                Login With Google</button>
                                    </div>
                                </div>
                            
                            </div>
                            {signError}
                          
                        </div>
                        {signError}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
      
    );
};

export default Login;