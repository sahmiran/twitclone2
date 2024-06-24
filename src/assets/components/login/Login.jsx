import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş doğrulama işlemleri
    // Başarılı girişten sonra ana uygulama sayfasına yönlendirme
    navigate("/app");
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
