const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const favoriteDeleted = await Favorite.findByPk(id);
    if (!favoriteDeleted) return res.status(404).json({ message: `No hay personaje con ese ${id}` });
    favoriteDeleted.destroy();
    return res.status(200).json({ message: 'Personaje borrado exitosamente' })

  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = deleteFav;