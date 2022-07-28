import React from "react";
import styles from "./login.module.css"

const Login = () => {
  return (
    <div className={styles.loginParent}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.userBox}>
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a  href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
