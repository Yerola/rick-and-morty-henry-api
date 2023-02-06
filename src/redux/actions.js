export const ADD_CHARACTER = "ADD_CHARACTER";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addCharacter = (character) => {
  return { type: ADD_CHARACTER, payload: character };
};
export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};
export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
export const searchCharacters = () => {
  return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTERS, payload: data.results })
      );
  };
};

