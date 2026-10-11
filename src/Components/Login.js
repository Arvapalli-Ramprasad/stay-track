import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    // Keep keys consistent with your state initialization
    const [loginrequest, setloginrequest] = useState({ Email: "", Password: "" });
    const [message, setmessage] = useState("");
    

    function updateUserDetails(e) {
        const { name, value } = e.target;
        setloginrequest({ ...loginrequest, [name]: value });
    }

    async function loginRequest(event) {
        event.preventDefault();
        console.log("Submitting Email:", loginrequest.Email);
        
        // Your API call implementation goes here
    }

    return (
    <div className="login-page">
        <div className='login'>
            <div className='logo-background'>
                <img
                    src='https://room-management-photos.s3.eu-north-1.amazonaws.com/stayTrack/stayTrack.png'
                    className='logo'
                    alt='StayTrack Logo'
                />
            </div>

            <div className='login-content'>
                <div className='login-image'>
                    <img
                        src='https://room-management-photos.s3.eu-north-1.amazonaws.com/stayTrack/staytracklogin-page.jpg'
                        className='login-logo'
                        alt='StayTrack Illustration'
                    />
                </div>

                <div className='login-form'>
                    <h1>Login</h1>

                    <form onSubmit={loginRequest}>
                        <input
                            type='email'
                            name='Email'
                            placeholder='Enter Username or Email'
                            required
                            onChange={updateUserDetails}
                            value={loginrequest.Email}
                            className='input'
                        />

                        <input
                            type='password'
                            name='Password'
                            placeholder='Enter Password'
                            required
                            onChange={updateUserDetails}
                            value={loginrequest.Password}
                            className='input'
                        />

                        <button type="submit">Login</button>
                    </form>

                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;
