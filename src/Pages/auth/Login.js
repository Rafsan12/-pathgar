import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase-init';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithFacebook, userFB, loadingFB, errorFB] = useSignInWithFacebook(auth);

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const navigate = useNavigate();
    let loadingCom;
    if (loading || loading1 || loadingFB) {
        loadingCom= <button class="btn loading">loading</button>
    }

    let signError;
    if (error || error1 || errorFB) {
        signError = <p className='text-red-500'>{error?.message || error1?.message}</p>
    }
    if(user||user1 ||  userFB){
        navigate('/')
    }
    return (
        <div>
          
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {loadingCom}
                        <div className="card-body">
                            <div className="form-control">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered mb-3"
                                    {...register("email", { required: true })}
                                    aria-invalid={errors.email ? "true" : "false"} />
                                    {errors.email?.type === 'required' && <p className='text-red-500' role="alert"> Email is required</p>}

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                <input type="password" placeholder="password" className="input input-bordered "
                                    {...register("password", { required: true })}
                                    aria-invalid={errors.password ? "true" : "false"} />
                                    {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary"><i className="fa-solid fa-arrow-right font-bold text-black-500 mr-3"></i>Login</button>
                                    </div>
                                    <p> New User? <Link to='/register' className='text-green-600'>Create Account </Link></p>
                                </form>
                                <div class="divider ">OR</div>
                                <button onClick={() => signInWithGoogle()}  class="btn btn-outline p-3">
                                    <i className="fa-brands fa-google mr-2 font-bold text-sky-500"></i>
                                    Login With Google</button>
                                <button onClick={() => signInWithFacebook()} class="btn btn-outline p-3  mt-3">
                                    <i className="fa-brands fa-facebook font-bold text-sky-600 mr-2 "></i>
                                    Login With Facebook</button>     
                            
                            </div>
                            {signError}
                          
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <form >
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange}  required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange}  required/>
                </label>
                <input type="submit" value="Sign In"  />
                <hr/>
                <p>don't have an account</p>
                <Link to="/register">
                    <button className="btn btn-outline btn-primary"><i class="fa-solid fa-arrow-right"></i> Sign Up </button>
                </Link>
            </form> */}
        </div>
    );
};

export default Login;