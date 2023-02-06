/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css"
import logoYes from "../../imagenes/Yesica_Lato.jpg";


export default function About() {
  return (
    <div className={styles.me}>
      <div className={styles.ab}>
        <center><img src={logoYes} alt="logo-Yesica" /></center>
        <center><h3><p><strong>Mi nombre es Yesica Romina Lato. Soy estudiante de Full Stack Developer en el Bootcamp de Soy Henry.<br></br><br></br>
          Esta aplicación se realizó utilizando CSS, HTML, JS, React y Redux.<br></br><br></br>
          Consume la API de Rick & Morty y nos muestra información básica de cada personaje.</strong></p></h3></center>
        <Link to={`/home`}><center><h2 className={styles.like}>Espero que la disfruten!</h2><span role="img" aria-labelledby="claps&rocket">🔹🔹🔹🚀👏🏼🧐🚀🔹🔹🔹</span></center>
          <center><button className={styles.boton}>VOLVER</button></center>
        </Link>
      </div><br></br>
    </div>
  )
}
