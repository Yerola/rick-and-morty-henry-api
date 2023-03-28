import Cards from "./components/Cards/Cards";
import styled from "styled-components";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from './components/Error/Error';
import Favorites from "./components/Favorites/Favorites";
import imagenes from "./imagenes/hd-wallpaper-5858656.jpg";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const Contenedor = styled.div`
  background-image: url(${imagenes});
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

function App() {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const username = "Click Iniciar Sesión"; //ye_lato@yahoo.com.ar
  const password = "0123456789101112130"; //12345678

  useEffect(() => {
    onSearch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    let flag = true;
    characters.forEach((element) => {
      if (parseInt(character) === element.id) {
        window.alert(
          "El personaje que desea agregar ya se encuentra en la aplicación"
        );
        return (flag = false);
      }
    });
    flag &&
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
  };

  const onClose = (character) => {
    setCharacters((characters) =>
      characters.filter((element) => element.id !== character)
    );
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Usuario y/o contraseña inválidos");
    }
  };

  return (
    <Contenedor className="App">
      {location.pathname !== "/" && <Navbar onSearch={onSearch} />}
      <Routes>
        <Route exact path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {/* <Route path='*' element={<Error />} /> */}
        <Route path="/favorites" element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </Contenedor>
  );
}

export default App;
