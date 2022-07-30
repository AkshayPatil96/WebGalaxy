import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css"
import  axios  from 'axios';

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  const handleChange=(e)=>{
      let {name, value} = e.target ;
      setUser({
        ...user,
        [name] : value
      })
  }

  const handleRegister=(e)=>{
    e.preventDefault();
    let payload = JSON.stringify(user);
    console.log("payload: ", payload);
    axios.post("http://localhost:8080/auth/register", payload)
      .then((res) => res.json())
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.registerParent}>
      <div className={styles.loginBox}>
        <h2>Register</h2>
        <form>
          <div className={styles.userBox}>
            <input onChange={handleChange} type="text" name="email" required />
            <label>Email</label>
          </div>
          <div className={styles.userBox}>
            <input onChange={handleChange} type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input onChange={handleChange} type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className={styles.userBox}>
            <input onChange={handleChange} type="number" name="phone" required />
            <label>Phone</label>
          </div>
          <Link onClick={handleRegister} to="/login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
