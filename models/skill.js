// models/User.js
const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Number,
    },
    sequential: {
      type: Number,
    }
  },
);

const Skill = mongoose.model("User", SkillSchema);

module.exports = Skill;