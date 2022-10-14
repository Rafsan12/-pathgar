import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
let errorMsg;
    if (error) {
        errorMsg = <p className='text-red-600'>Error: {error.message}</p>
            
    }
    let loadingCom;
    if (loading ) {
        loadingCom = <button class="btn loading">loading</button>
    }
    if (user) {
        navigate("/login");
    }
    return (
        <div className="hero min-h-screen ">
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
                    {loadingCom}
                <div className="form-control">
                <h2 className='text-center text-3xl'>PLease Register</h2>
            <label className="label">
                <span className="label-text">Email</span>
            </label>
                        <input className="input input-bordered"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required
            />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                        <input className="input input-bordered mb-3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required
            />
            {errorMsg}
                        <button onClick={() => createUserWithEmailAndPassword(email, password)} className="btn btn-outline btn-primary">
                Register
            </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;