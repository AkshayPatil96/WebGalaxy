import React from "react";
import styles from "./register.module.css"

const Register = () => {
  return (
    <div className={styles.registerParent}>
      <div className={styles.loginBox}>
        <h2>Register</h2>
        <form>
          <div className={styles.userBox}>
            <input type="text" name="email" required />
            <label>Email</label>
          </div>
          <div className={styles.userBox}>
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className={styles.userBox}>
            <input type="text" name="phone" required />
            <label>Phone</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
