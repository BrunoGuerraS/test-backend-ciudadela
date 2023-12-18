const { getDataFromApiGraphRnM } = require("../services/character.service");
const { QCharacters, QCharater } = require("../services/character.query");

class Character {
  async getCharacters(filter) {
    const { species, page } = filter;
    const query = QCharacters(species, page);
    try {
      const res = await getDataFromApiGraphRnM(query);
      return res.characters.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getCharacterById(id) {
    const query = QCharater(id);
    try {
      const res = await getDataFromApiGraphRnM(query);
      return res.character;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = Character;
