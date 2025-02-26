import User from "../models/user.js";
// import user from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";

export const register = async (req, res) => {
  /* To test if the data is correctly recieved at Backend or not...

    console.log("server->register req-data : " ,  req.body);
    const responseObject = {
        message: 'Registration successful , server->register req-data :',
        data: req.body
    }
    res.send(responseObject);
    */

  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Passwod is requied & should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    })
    
    await user.save();

    console.log("saved user", user);
    return res.json({ok : true})

  } catch (err) {
    console.log(err);
    return res.status(400).send("Error! Try again.");
  }
};
