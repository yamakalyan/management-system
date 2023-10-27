const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const headerKey = process.env.JWT_HEADER;
    const secureKey = process.env.JWT_SECURE;
    const header = req.header(headerKey);

    if (!header) {
      return res.status(400).json({
        success: false,
        message: "JWT must be provided"
      })
    }
    const verify = jwt.verify(header, secureKey)

    if (!verify) {
      return res.status(400).json({
        success: false,
        message: "InvalidToken"
      })
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
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error
    })
  }
};