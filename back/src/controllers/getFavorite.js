let favs = require('../utils/favs');

const getFavorite = (req, res) => {
    return res.status(200).json(favs);
};

module.exports = getFavorite;

