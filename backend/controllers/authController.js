const asynHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User } = require("../Models/user");
const {
  validationRegisterUser,
  validationLoginUser,
} = require("../Models/user");
const crypto = require("crypto");
const VerificationToken = require("../Models/VerificationToken");


/**----------------------------------------------
 * @desc  register new users
 * @route /api/auth/register
 * @method post
 * @access public
 -------------------------------------------------*/


// =================== register ===============================
module.exports.registerUserCtrl = asynHandler(async (req, res) => {
  // validation
  const { error } = validationRegisterUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // is user already exists
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "User already exist" });
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // new user and save it to DB
  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });
  await user.save();


    // Creating new VerificationToken & save it toDB
    const verifictionToken = new VerificationToken({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    });
    await verifictionToken.save();
  
          
    res.status(201).json({
      message: "You have been Register in successfully",
    });
  });


// =================== login ===============================

module.exports.loginUserCtrl = asynHandler(async (req, res) => {
  // validation
  const { error } = validationLoginUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // user exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "invalid email or password" });
  }

  // check the password
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "invalid email or password" });
    }

  // generate token (jwt)
  //$ npm i jsonwebtoken
    const token = user.generateAuthToken();

  // response to client
  res.status(200).json({ 
    _id: user._id,
    isAdmin: user.isAdmin,
    profilePhoto: user.profilePhoto,
    token,
    username: user.username,
  });
});

