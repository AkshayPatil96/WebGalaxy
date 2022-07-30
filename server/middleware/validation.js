const validateRegister = async (req, res, next) => {
  const { username, number, email, password } = req.body;

  if (!username) {
    return res.status(400).json({ msg: "Please add your username." });
  } else if (username.length > 12) {
    return res
      .status(400)
      .json({ msg: "Your firstName can be upto 12 characters long." });
  }

  // ? number
  if (number.length != 10) {
    return res
      .status(400)
      .json({ msg: "Your mobile number must be 10 characters long." });
  }

  // ? email
  if (!email) {
    return res.status(400).json({ msg: "Please add your email." });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Your password must be at least 6 characters long." });
  }
  next();
};

module.exports = validateRegister;
