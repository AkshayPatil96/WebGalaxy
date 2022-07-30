import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, refreshToken } from "../../redux/action/auth.action";
import styles from "./login.module.css";

const Login = () => {

  const initState = { username: "", password: "" };

  const [userLogin, setUserLogin] = useState(initState);

  const { username, password } = userLogin;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { auth } = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // dispatch(login(userLogin));
    try {
      const res = await axios.post("/auth/login", userLogin);

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
  // console.log(auth);

  // useEffect(() => {
  //   if (auth.access_token) {
  //     navigate("/");
  //   }
  // }, [auth, navigate]);

  return (
    <div className={styles.loginParent}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userBox}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              autoComplete="off"
            />

            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="off"
            />
            <label>Password</label>
          </div>
          <button className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
