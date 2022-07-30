export const validRegister = (userRegister) => {
  const { username, number, email, password } = userRegister;
  const errors = [];

  if (!username) {
    errors.push("Please add your username.");
  } else if (username.length > 12) {
    errors.push("Your username can be upto 12 characters long.");
  }

  if (number.length !== 10) {
    errors.push("Your mobile number must be 10 characters long.");
  }

  if (!email) {
    errors.push("Please add your email.");
  } else if (!validateEmail(email)) {
    errors.push("Your email format is incorrect.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 chars.");
  }

  return {
    errMsg: errors,
    errLength: errors.length,
  };
};

export function validPhone(phone) {
  const re = /^[+]/g;
  return re.test(phone);
}

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
