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
import axios from "axios";

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
    !access && navigate("/");
  }, [access, navigate]);


  async function onSearch(character) {
    try {
      // const onSearch = (character) => {
      characters.forEach((element) => {
        if (parseInt(characters) === element.id) {
          window.alert("El personaje que desea agregar ya se encuentra en la aplicación");

        }
      });


      const objeto = await axios(`https://rickandmortyapi.com/api/character/${character}`)
      const personaje = objeto.data;

      if (personaje.name) {
        if (characters.find(char => char.id === personaje.id)) window.alert("ID Repetido");
        else (setCharacters((oldChars) => [...oldChars, personaje]));
      } else {
        window.alert("No hay personajes con ese ID");
      }

    } catch (error) {
      console.log(error);
    };
  };

  const onClose = (character) => {

    setCharacters((characters) =>
      characters.filter((element) => element.id !== character) // probar con id en lugar de character
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

  const logout = () => {
    setAccess(false)
    navigate('/')
  }

  return (
    <Contenedor className="App">
      {location.pathname !== "/" && <Navbar onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route exact path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </Contenedor>
  );
}

export default App;
