const app = require('../App');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
  describe('GET rickandmorty/character/{id}', () => {
    it('Responde con status: 200', () => {
      return agent.get('/rickandmorty/character/1').expect(200);
    });
  });
  it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
    return agent
      .get('/rickandmorty/character/1')
      .expect(200)
      .then((response) => {
        const expectedKeys = ['id', 'name', 'species', 'gender', 'image'];
        const actualKeys = Object
          .keys(response.body);
        expectedKeys
          .forEach((key) => {
            expect(actualKeys)
              .toContain(key);
          });
      });
  });
  it('Si hay un error responde con status: 500', () => {
    return agent
      .get('/rickandmorty/character/IDqueNoExiste')
      .expect(500);
  });

  describe('GET rickandmorty/detail/{detailId}', () => {
    it('Responde con status: 200', () => {
      return agent.get('/rickandmorty/character/1').expect(200);
    });
  });
  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', () => {
    agent.get('/rickandmorty/detail/1').then((response) => {
      expect(response.body).toEqual({
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      })
    });
  });
});

/*
//* 'Responde un objeto con las propiedades: 
//* "id", "name", "species", "gender" e "image"'
Este testing utiliza el framework de testing Supertest 
para hacer una solicitud HTTP a la ruta /rickandmorty/1 
y asegurarse de que devuelve una respuesta exitosa (código de estado 200). 
Luego, utiliza promesas para validar que la respuesta contiene un objeto 
con las propiedades id, name, species, gender e image.
La función Object.keys se utiliza para obtener un array con todas 
las propiedades del objeto. 
Luego, se utiliza un bucle forEach para validar que cada una 
de las propiedades esperadas (expectedKeys) está presente en el objeto 
(actualKeys). Para hacer esta validación se utiliza la función 
toContain de Jest.
//* 'Si hay un error responde con status: 500'
Este testing utiliza Supertest para hacer una solicitud HTTP 
a una ruta inexistente (en este caso, /rickandmorty/IDqueNoExiste) 
y asegurarse de que devuelve un código de estado 500. 
Esto forzará a la ruta a tener un error 
y comprobará que el servidor responde correctamente 
ante este tipo de errores.
*/