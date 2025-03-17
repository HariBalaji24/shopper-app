import React, { useState } from 'react';
import "./email.css";

function Email() {
    const [formData, setFormData] = useState({ email: "" });

    const handleChange = (event) => {
        setFormData({ email: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Email:", formData);
    };
    function checking(){
        if(localStorage.getItem("auth-token")){
            console.log("successful")
        }
        else{
            window.location.replace("/login");
        }
    }
    
    return (
        <div className='email'>
            <h1 className='email-h1'>Get Exclusive Offers On Your Email</h1>
            <p className='email-p'>Subscribe to us and stay tuned</p>
            <form className="email-submit" onSubmit={handleSubmit}>
                <input
                    className='email-input'
                    placeholder="Enter email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    
                />
                <button onClick={checking}   className='email-button' type="submit">Subscribe</button>
            </form>
        </div>
    );
}

export default Email;
