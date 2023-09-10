module.exports = (req, res, next) => {
  const inputName = req.body.name;
  const inputMobile = req.body.mobile;
  const inputPassword = req.body.password;
  const inputEmail = req.body.email;

  //  if (!req.body) {
  //    return res.status(400).json("Missing request body");
  //  }

  const allowedLettersForName = /^[A-Za-z]+$/;
  const allowedLettersForEmail = /^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$/;

  if (inputName && !inputName.match(allowedLettersForName)) {
    res.status(400).json("No special characters are allowed in Name");
  }

  if (inputEmail && !inputEmail.match(allowedLettersForEmail)) {
    res.status(400).json("Invalid email format");
  }

  if (inputMobile && isNaN(Number(inputMobile))) {
    res.status(400).json("No special characters are allowed in Mobile");
  }

  next();
};
