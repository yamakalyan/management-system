const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("./Controllers/AdminController");
const Auth = require("./Controllers/Authorizers/Auth");
const management = require("./Controllers/ManagementController");
const staff = require("./Controllers/StaffController");
const student = require("./Controllers/StudentController");

require("dotenv").config();

app.listen(3210, (err, res) => {
  if (err) {
    console.log("Server connections failed");
  } else {
    console.log("Server listening at 3210");
  }
});

app.get("/api/", (req, res) => {
  const returnIs = {
    success: true,
    message: "Working properly.",
    developed_by: "Kalyanyama.",
    developers: [{
      {
        name: "Kalyan Yama",
        portfolio: "https://yamakalyan3120.web.app/",
        github: "https://github.com/yamakalyan",
        designation: "Full-stack Developer",
      },
    ],
  };
  res.json(returnIs);
});

app.use(express.json());

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "header_key"],
};

app.use(cors(corsOpts));

app.use(async (error, req, res, next) => {
  error.message = (await error.message) || "Something went wrong";
  error.name = (await error.name) || "";
  res.status(error.status || 500).json({
    success: false,
    error,
  });
});

app.use("/api/admin", admin);
app.use("/api/management", management);
app.use("/api/staff", staff);
app.use("/api/student", student);
app.use("/api/auth", Auth)
