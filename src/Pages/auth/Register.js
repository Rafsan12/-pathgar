import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    let errorMsg;
    if (error) {
        errorMsg = <p className='text-red-600'>Error: {error.message}</p>

    }
    let loadingCom;
    if (loading) {
        loadingCom = <button class="btn loading">loading</button>
    }
    if (user) {
        navigate("/login");
    }
 
    return (
        <div className="card flex justify-center items-center min-h-screen w-lg bg-base-100 shadow-xl">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    {loadingCom}
                    <div className="form-control">
                        <h2 className='text-center text-2xl font-bold mb-2'>Please Register</h2>
                        <hr style={{ border: "3px solid #A992F7", width: "200px", display: "flex", margin: "auto", marginBottom: "30px", borderRadius: "10px" }} />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered mb-3"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required
                        />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered mb-3"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required
                        />
                         <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input className="input input-bordered"
                            type="password"
                            placeholder="confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} required
                        />
                        {errorMsg}
                        <button onClick={() => createUserWithEmailAndPassword(email, password, confirmPassword)} className="btn btn-outline mt-6">
                            Register
                        </button>
                        <p className='mt-2'>Already have an account? <Link to='/login' className='text-green-600 hover:underline ml-2'>Please login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;