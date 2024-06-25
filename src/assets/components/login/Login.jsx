import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };

  return (
    <div className="loginpage">
      <div className="x-logo">
        <img
          src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png"
          className="xlogofoto"
          alt="X logo"
        />
      </div>
      <div className="login">
        <h1 className="headertext">Şu anda olup bitenler</h1>
        <p className="headerp">Hemen Katıl</p>
        <form className="login-form" onSubmit={handleLogin}>
          <button type="submit">Login</button>
          <button type="button">Kayıt Ol</button>
          <p>veya</p>
          <button type="button">Kayıt Ol</button>
          <p className="legaltext">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
