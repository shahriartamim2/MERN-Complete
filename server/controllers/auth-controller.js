const User = require("../models/user-models");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("MERN is inserting");
  } catch (error) {
    res.status(400).send({ message: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body)
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "This email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      message: "Registration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPassValid = await userExist.comparePassword(password);

    if (isPassValid) {
      res.status(200).json({
        message: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }
    else{
        res.status(401).json({message:"Invalid username or password"})
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);  
  }
};

module.exports = { home, register, login };
