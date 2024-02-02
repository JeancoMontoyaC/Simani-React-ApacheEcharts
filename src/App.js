import React, { useState } from 'react';
import ChartComponent from './component/ChartComponent';
import datos from './json/colombia.json';
import HeatMap from './component/HeatMap';
import Bars from './component/Bars';
import DescargarPDF from './component/DescargarPDF';
import DescargarExcel from './component/DescargarExcel';
import useFetch from './component/useFetch';
import Try from './Try';
import datosWorld from './json/world.json';
import HeatMapWorld from './component/HeatMapWorld';
import Boton from './component/Boton';
import Dropdown from './component/Dropdown';
import Login from './component/Login';

const App = () => {
  const [mostrarPantallaLogin, setMostrarPantallaLogin] = useState(true);

  const handleLoginClick = () => {
    // Cambiar el estado para ocultar la pantalla de login y mostrar los elementos
    setMostrarPantallaLogin(false);
  };
  {/*
  const [contenidoPDF, setContenidoPDF] = useState("Hola, este es un PDF de ejemplo!");
  const [contenidoExcel, setContenidoExcel] = useState({
    datos: [
      { Nombre: 'Juan', Edad: 25 },
      { Nombre: 'María', Edad: 30 },
    ],
  });
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
*/}
  return (

    /*
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1>Mapa Colombia</h1>
        <ChartComponent data={datos} chartId='1' />
      </div>
  */

    /*
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1>Mapa de calor</h1>
      <HeatMap chartId='2' />
    </div>
    */
    /*
        <div style={{ width: '100vw', height: '100vh' }}>
          <h1>Barras</h1>
          <Bars chartId='3' />
        </div>
        */
    /*
        <div style={{ width: '100%', height: '100%' }}>
          <h1>Descargar PDF</h1>
          <DescargarPDF contenidoPDF={contenidoPDF} />
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <h1>Descargar Excel</h1>
          <DescargarExcel contenidoExcel={contenidoExcel} nombreArchivo="mi_archivo" />
        </div>
        */
    /*
        <div style={{ width: '100%', height: '100%' }}>
          <Try />
        </div>
        <div style={{ width: '100vw', height: '100vh' }}>
          <h1>Mapa Muldial</h1>
          <HeatMapWorld data={datosWorld} chartId='100' />
        </div>
        */
    /* 
        {mostrarPantallaLogin ? (
          // Pantalla de inicio de sesión con estilos específicos
          <div style={styles.loginContainer}>
            <h2>¡Bienvenido! Ingresa tus credenciales:</h2>
            <form>
              <label htmlFor="correo">Correo electrónico:</label>
              <input type="email" id="correo" name="correo" required />
  
              <label htmlFor="contrasena">Contraseña:</label>
              <input type="password" id="contrasena" name="contrasena" required />
  
              <button type="button" onClick={handleLoginClick}>Iniciar Sesión</button>
            </form>
          </div>
        ) : (
          // Elementos Boton y Dropdown sin estilos específicos
          <>
            <div style={{ width: '100%', height: '100%' }}>
              <Boton chartId='1' />
            </div>
            <div>
              <Dropdown chartId='255' />
            </div>
          </>
        )}
        */
    <div>
      <Login />
    </div>
  );
};

const styles = {
  loginContainer: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: 'auto', // Centra la pantalla de inicio de sesión en el contenedor principal
    marginTop: '100px', // Ajusta según sea necesario
  },
};

export default App;
