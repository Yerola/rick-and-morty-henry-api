import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import validation from "../validation";


export default function Form(props) {

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
    setErrors(
      validation(({
        userData,
        [name]: value
      }))
    )
  }
  const handleSubmit = () => {
    props.login(userData);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label><div><strong className={styles.input}>Usuario:</strong></div></label>
          <input
            className={styles.input2}
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          //autoComplete="current-password";
          />
          <p className={styles.error}>
            {errors.username ? errors.username : null}
          </p>

        </div>

        <div>
          <label><div><strong className={styles.input}>Contraseña: </strong></div></label>
          <input
            className={styles.input2}
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p className={styles.error}>
            {errors.password ? errors.password : null}
          </p>
        </div>
        <center><button className={styles.boton} type="submit"><strong>Iniciar Sesión</strong></button></center>
      </form>
    </div>
  )
}
