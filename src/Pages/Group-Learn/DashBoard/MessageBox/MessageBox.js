import React, { useState } from 'react';
import './MessageBox.css';
import { useNavigate } from 'react-router-dom';


const MessageBox = () => {


    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [data, setData] = useState({ name: "", room: "" })



    const handleUserNameBlur = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }


    const validation = () => {
        if (!data.name) {
            setError("Please enter your name.")
            return false
        }
        if (!data.room) {
            setError("Please select room.")
            return false
        }
        setError("")
        return true
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        const isValid = validation()
        if (isValid) {
            navigate(`/chat/${data.room}`, { state: data });
        }
    }





    return (
        <div class="join-container">
            <header class="join-header text-3xl text-white font-bold bg-primary">
                <h1><i class="fas fa-smile"></i> Join Chat</h1>
            </header>
            <main class="join-main bg-purple-300">
                <form onSubmit={handleFormSubmit}>
                    <div class="form-control">
                        <label className='text-white' for="username">Username</label>
                        <input onBlur={handleUserNameBlur}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter username..."
                        />
                    </div>

                    <div class="form-control">
                        <label className='text-white' for="room">Room</label>
                        <select className="form-select bg-light" name="room" onBlur={handleUserNameBlur}>
                            <option value="">Select Room</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="PHP">PHP</option>
                            <option value="C#">C#</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Java">Java</option>
                        </select>
                    </div>
                    <p className='text-xl text-red-500'>{error}</p>
                    <button type="submit" class="btn text-white">Join Chat</button>
                </form>
            </main>
        </div>
    );
};

export default MessageBox;