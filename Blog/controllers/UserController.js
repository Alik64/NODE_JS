import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Impossible to login 404" });
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid login or password" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.REACT_APP_SECRET,
      {
        expiresIn: "30d",
      }
    );
    const { passwordHash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Impossible to login" });
  }
};

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const newUser = await doc.save();

    const token = jwt.sign(
      {
        _id: newUser._id,
      },
      process.env.REACT_APP_SECRET,
      {
        expiresIn: "30d",
      }
    );
    const { passwordHash, ...userData } = newUser._doc;
    res.json({ ...userData, token });
  } catch (error) {
    res.status(500).json({
      message: "Impossible to register new user.",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { passwordHash, ...userData } = user._doc;
    res.json(userData);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ message: "Access denied" });
  }
};
