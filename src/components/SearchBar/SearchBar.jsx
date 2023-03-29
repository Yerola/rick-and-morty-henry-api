import styled from "styled-components";
import { useState } from "react";

const Contenedor = styled.div``;
const Buscador = styled.input``;
const Boton = styled.button``;

export default function SearchBar(props) {
  let [characterId, setCharacterId] = useState("");

  const limpiarBusqueda = () => {
    setCharacterId("");
  };

  const handleSearch = () => {
    props.onSearch(characterId);
    limpiarBusqueda();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Contenedor>
      <Buscador
        type="text"
        name="search"
        id="#"
        placeholder='Número de personaje...'
        value={characterId}
        onChange={(e) => setCharacterId(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Boton onClick={handleSearch}>Buscar</Boton>
      <span role="img" aria-labelledby="loupe">
        🔍
      </span>
      <button
        onClick={() => props.onSearch(Math.floor(Math.random() * 826))}
      >
        Aleatorio
      </button>
    </Contenedor>
  );
};
