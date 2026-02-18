const Skill = require('../models/skill');

// CREATE USER
module.exports = {
  getAllSkills: async () => {
    const skills = await Skill.find();

    return (skills.length > 0) ? skills : null;
  },
};