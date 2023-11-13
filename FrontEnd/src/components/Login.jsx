import React, { useState } from "react";
import "../Login.css"; // Import the CSS file
import Axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const usuario={correo,contrasena}
    const response = await Axios.post("/usuarios/login",usuario);
    console.log(response)
    const mensaje = response.data.mensaje;
    if (mensaje !== 'Bienvenidos') {
      Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      const token = response.data.token;
      const nombre = response.data.nombre;
      const idUsuario = response.data.id;
      
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('nombre', nombre);
      sessionStorage.setItem('idUsuario', idUsuario);

      Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      });

      window.location.href = '/index';
    }
  };

  return (
    <div>
      <div className="backgroundLos"></div>
      <div className="containerLos">
        <div className="itemLos">
          <h2 className="logo">
            <i className="bx bxl-xing"></i>FIC - WEB
          </h2>
          <div className="text-itemLos">
            <h2>
              Bienvenido! <br />
              <span>Inicio de Sesión</span>
            </h2>
            <p>Sistema de Gestión de APIS</p>
          </div>
        </div>
        <div className="login-sectionLos">
          <div className="form-boxLos loginLos">
            <form onSubmit={handleLogin}>
              <h2>Acceder</h2>
              <div className="input-boxLos">
                <span className="icon">
                  <i className="bx bxs-envelope"></i>
                </span>
                <input
                  type="text"
                  id="inpute"
                  name="email"
                  onChange={(e) => setCorreo(e.target.value)}
                />
                <label>Usuario</label>
              </div>
              <div className="input-boxLos">
                <span className="icon">
                  <i className="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="password"
                  id="input"
                  name="password"
                  onChange={(e) => setContrasena(e.target.value)}
                />
                <label>Contraseña</label>
              </div>
              <div className="remember-passwordLos">
                <label>
                  <input type="checkbox" /> Recordar usuario
                </label>
              </div>
              <input className="btnLos" name="submit" type="submit" value="Iniciar Sesión" />
              <div className="create-accountLos">
                <p>
                  ¿No puedes acceder? <a href="Ayuda.php" className="register-linkLos">Ayuda</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
