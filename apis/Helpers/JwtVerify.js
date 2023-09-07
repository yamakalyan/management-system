const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const headerKey = process.env.JWT_HEADER;
  const secureKey = process.env.JWT_SECURE;
  const header = req.header(headerKey);
  const verify = jwt.verify(header, secureKey);

  if (!verify) {
    res.status(401).json({
      success: false,
      message: "InvalidToken",
    });
  }

  let tokenId = "";
  let role = ""

  if (verify.management_id) {
    tokenId = verify.management_id;
    role = verify.role

  } else if (verify.staff_id) {
    tokenId = verify.staff_id;
    role = verify.role

  } else if (verify.student_id) {
    tokenId = verify.student_id;
    role = verify.role

  } else {
    tokenId = verify.id;
    role = verify.role

  }

  req.id = tokenId;
  req.role = role

  next();
};