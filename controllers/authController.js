// controllers/auth.controller.js
const User = require("../models/user");

exports.login = async (req, res) => {
      try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
          return res.status(401).json({ message: "Wrong credentials" });
        }

        const ok = btoa(password) === user.password;

        console.log(username, password, user.password, btoa(password), ok);

        if (!ok) {
          return res.status(401).json({ message: "Wrong credentials" });
        }

        return res.status(200).json({ message: "Login successful" });
      } catch (err) {
        // console.error(err);
        return res.status(500).json({ message: "Server error" });
      }
    };
