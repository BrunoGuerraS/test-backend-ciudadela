const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/character.controller');
const service = new charactersController()

router.get('/', async (req, res) => {
    const { species, page } = req.query;
    const characters = await service.getCharacters({species, page});
    res.status(200).json(characters);
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const character = await service.getCharacterById(id);
    res.status(200).json(character);
})

module.exports = router;