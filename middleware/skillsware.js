const Skill = require('../models/skill');

// CREATE USER
module.exports = {
  getAllSkills: () => Skill.find().lean(),
};