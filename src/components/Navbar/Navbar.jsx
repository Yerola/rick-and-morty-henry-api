import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const Contenedor = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

export default function Nav(props) {
  return (
    <Contenedor>
      <div className={styles.body}></div>
      <nav>
        <Link to={"/home"}>
          <span>🔹Inicio</span>
        </Link>
        <SearchBar onSearch={props.onSearch} />
        <Link to={"/about"}>
          <span>🔹Acerca</span>
        </Link>
        <Link to={"/favorites"}>
          <span>🔹Favoritos</span>
        </Link>
        <Link to="/" className={`${styles.link}`}>🔹Logout</Link>
      </nav>
    </Contenedor>
  );
}
