import Card from "../Card/Card";
import React from 'react';
import styled from "styled-components";

const Contenedor = styled.div`
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 10px;
    justify-content: center;
`;

export default function Cards(props) {
  const { characters } = props;
  const element = characters.map((character) => (
    <Card
      name={character?.name}
      species={character?.species}
      gender={character?.gender}
      image={character?.image}
      id={character?.id}
      key={character?.name}
      onClose={props?.onClose}
    />
  ));
  return <Contenedor>{element}</Contenedor>;
}
