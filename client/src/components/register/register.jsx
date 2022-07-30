import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refreshToken, register } from "../../redux/action/auth.action";
import styles from "./register.module.css";

const Register = () => {
  const initState = {
    username: "",
    number: "",
    email: "",
    password: "",
  };

  const [userRegister, setUserRegister] = useState(initState);

  const { username, number, email, password } = userRegister;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { auth, alert } = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // dispatch(login(userLogin));
    try {
      const res = await axios.post("/auth/register", userRegister);

      const data = await res.data;
      console.log("data: ", data);
      if (data) {
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // useEffect(() => {
  //   dispatch(refreshToken());
  //   if (auth.access_token) {
  //     navigate("/");
  //   }
  // }, [auth, navigate, dispatch]);

  return (
    <div className={styles.registerParent}>
      <div className={styles.loginBox}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userBox}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
          </div>
          <button className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
