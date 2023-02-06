import React from "react";
import Navbar from "../NavBar/NavBar";
import styles from "./Home.module.css"
import Cards from "../Cards/Cards.jsx"

function Home() {
  return (
    <div className={styles.body}>
      <Navbar />
      <Cards />

    </div>
  )
}

export default Home;


