const { getAllSkills } = require('../middleware/skillsware');

module.exports = {

  getAll: async (req, res) => {
    const result = await getAllSkills();    
    return result ? res.json(result) : res.status(404).send();
  }
};