import React, { useState } from "react";
import "./login.css";
import whatsapp_icon from "/Assets/whatsapp_icon.png";
import instagram_icon from "/Assets/instagram_icon.png";
import pintester_icon from "/Assets/pintester_icon.png";

const Login = () => {
  const [stat, setstatus] = useState("Log In");
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handler(event) {
    setuser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function signin() {
    setstatus("Sign In");
    const newuser = {
      name: user.name,
      email: user.email,
      password: user.password
    };

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newuser),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/");
    } else {
      alert(data.errors);
    }
  }

  async function login() {
    setstatus("Log In");
    const newuser = {
      email: user.email,
      password: user.password
    };

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newuser),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/");
    } else {
      alert(data.errors);
    }
  }

  function toggleForm() {
    setstatus(stat === "Sign In" ? "Log In" : "Sign In");
    setuser({ name: "", email: "", password: "" }); // Reset fields when switching forms
  }

  return (
    <div className="login-container">
      <div className="login">
        <h3>{stat}</h3>
        <div className="login-elements">
          {stat === "Sign In" && (
            <div className="login-name">
              <span>Name</span>
              <input name="name" onChange={handler} value={user.name} type="text" placeholder="Enter your name" />
            </div>
          )}

          <div className="login-email">
            <span>Email</span>
            <input name="email" onChange={handler} value={user.email} type="email" placeholder="Enter your email" />
          </div>
          <div className="login-password">
            <span>Password</span>
            <input name="password" onChange={handler} value={user.password} type="password" placeholder="Enter your password" />
          </div>
          <div className="login-last">
            <button onClick={stat === "Sign In" ? signin : login} type="submit">{stat}</button>

            <div className="login-signup">
              <span>{stat === "Sign In" ? "Already have an account ?" : "Don't have an account ?"} </span>
              <a onClick={toggleForm} className="toggle-button">
                {stat === "Sign In" ? " Log in" : " Sign In"}
              </a>
            </div>

            <div className="login-icons">
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <img src={pintester_icon} alt="Pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
