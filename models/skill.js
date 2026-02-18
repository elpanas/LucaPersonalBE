// models/skill.js
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

module.exports = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);