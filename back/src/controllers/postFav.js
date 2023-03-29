// eliminar antes carpeta completa utils

const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
  try {
    const { id, name, status, species, gender, origin, image } = req.body;
    if (!id || !name || !species || !gender || !origin || !image) {
      return res.status(404).json({ message: 'Completa todos los campos' })
    }; //throw new Error('Completa todos los campos')
    const favorite = await Favorite.create({ //modelo Favorite
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
    })
    return res.status(200).json(favorite);//devuelva el objeto que se creó por ejemplo
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = postFav;