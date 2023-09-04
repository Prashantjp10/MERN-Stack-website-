const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

/*=================================
        Database
===================================*/
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/WEBSITE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });
/************schema*********** */
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  repassword: String,
});
const UserModel = new mongoose.model("UserModel", userSchema);

/*=================================
        get and post
===================================*/
// app.get("/",(req,res)=>{
//     res.send("App is Runing")
// })
app.post("/register", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password, repassword } = req.body;
  UserModel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "This email id already Register" });
    } else {
      const user = new UserModel({
        firstName,
        lastName,
        email,
        password,
        repassword,
      });
      user.save();
      res.send({ message: "Successfull Register" });
    }
  });
});

/*============================
        listen
=============================*/
app.listen(8090, () => {
  console.log("Server is runing at port 8090");
});
