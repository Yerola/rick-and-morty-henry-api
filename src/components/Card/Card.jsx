import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { addCharacter, deleteCharacter } from "../../redux/actions";
import { connect } from "react-redux";

const Container = styled.div`
    width: 230px;
    display: flex;
    margin: auto;
    margin-bottom: 20px;
    flex-direction: column;
    border: solid green 7px;
    position: relative;
    box-shadow: 10px 5px rgb(10, 10, 10);
    border-radius: 10px 10px 10px 10px;
`;
const Boton = styled.button`
    background-color:rgb(36, 128, 194);
    font-family: monospace;
    font-weight:600;
    color:black;
    font-size:15px;
    letter-spacing:1px;
    position:relative;
    display:inline-block;
    transition: 0.3s;
    border: solid;
    height: 40px;
    text-transform: uppercase;
`;
const Imagen = styled.img`
  border-radius: 1px;
  box-shadow: 0 0 33px black;
`;
const Nombre = styled.h2`
  background-color: white;
  margin: 0.7rem;
`;
const Caracteristicas = styled.h3`
  margin: 0.5rem;
  align-self: flex-start;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.3rem;
  min-width: 5rem;
  background-color: white;
`;

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteCharacter(props.id);
    }
    if (!isFav) {
      setIsFav(true);
      props.addCharacter(props);
    }
  };

  return (
    <Container>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Boton onClick={() => props.onClose(props.id)}>X</Boton>
      <Imagen src={props.image} alt="img" />
      <NavLink to={`/detail/${props.id}`}>
        <center><Nombre>{props.name}</Nombre></center>
      </NavLink>
      <center><Caracteristicas>{props.species}</Caracteristicas></center>
      <center><Caracteristicas>{props.gender}</Caracteristicas></center>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (character) => dispatch(addCharacter(character)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
