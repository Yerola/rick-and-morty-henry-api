let favs = require('../utils/favs');

const deleteFavorite = (req, res) => {
  const { id } = req.params
  if (!id) res.status(400)
  else {
    let charIndex = favs.findIndex(fav => fav.id == id)
    if (charIndex == -1) {
      return res.status(404).send({ error: 'id no encontrado' })
    } else {
      favs.splice(charIndex, 1)
      return res.status(200).send(favs)
    };
  };
};

module.exports = deleteFavorite;

