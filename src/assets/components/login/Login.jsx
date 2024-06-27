import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/homepage", { state: { username, displayName } });
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
        <h2 className="headerp">Hemen katıl.</h2>
        <Button className="beyazButonlar">
          <span>
            <GoogleIcon className="gIcon" />{" "}
          </span>
          <p> Google ile kaydol </p>
        </Button>
        <Button className="beyazButonlar">
          <span>
            <AppleIcon />
          </span>
          <p>Apple ile kaydol</p>
        </Button>
        <p>-------------veya-------------</p>
        <Button className="kayitButonu">Hesap oluştur</Button>
        <p>
          By signing up, you agree to the Terms of Service and Privacy
          <br /> Policy, including Cookie Use.
        </p>
        <br />
        <br />
        <p>Zaten bir hesabın var mı?</p>
        <Button className="girisButonu">Giriş yap</Button>
      </div>
    </div>
  );
}

export default Login;

/*   <div className="login">
        <h1 className="headertext">Şu anda olup bitenler</h1>
        <p className="headerp">Hemen Katıl</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>  */
