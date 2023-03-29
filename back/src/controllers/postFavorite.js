let favs = require('../utils/favs');

const postFavorite = (req, res) => {
    const character = req.body;
    if (character) {
        let exists = favs.find(cur => cur.id === character.id);
        if (!exists) {
            favs.push(character);
            return res.status(200).json(character);
        }
    }
    return res.status(400).send("Personaje ya existente.");
};

module.exports = postFavorite;

