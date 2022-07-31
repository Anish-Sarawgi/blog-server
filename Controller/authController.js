const User = require("../models/user");
const bcrypt = require("bcrypt");

//REGISTER
const register = async (req, res) => {
  
    const salt = await bcrypt.genSalt(11);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    newUser.save()
    .then((data) => res.send(`User Registered. Details: ${data}`))
    .catch(err => console.log(err));
  }
;

//LOGIN
const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports ={
    register,login
}
