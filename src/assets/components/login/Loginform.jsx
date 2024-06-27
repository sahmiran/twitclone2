import React, { useState } from "react";
import "./Loginform.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Loginform({ setLogin }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/homepage", { state: { username, displayName } });
  };

  const handleCloseClick = () => {
    setLogin(false);
  };

  return (
    <div className="page">
      <div className="formArea">
        <form onSubmit={handleLogin}>
          <div className="formheader">
            <Button onClick={handleCloseClick}>
              {" "}
              <CloseIcon />
            </Button>
            <div className="formheaderlogo"></div>
          </div>

          <div className="container">
            <div className="titletext">
              <h2>X'e giriş yap</h2>
            </div>

            <div className="inputAlanı">
              <Button className="beyazButon">
                <span>
                  <GoogleIcon className="gIcon" />{" "}
                </span>
                <p> Google ile kaydol </p>
              </Button>
              <Button className="beyazButon">
                <span>
                  <AppleIcon />
                </span>
                <p>Apple ile kaydol</p>
              </Button>
              <div className="boslukAlani"></div>
              <input
                className="inputBox"
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
              <input
                className="inputBox"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Button className="beyazButon" type="submit">
                İleri
              </Button>
              <Button className="siyahButon">Şifreni mi unuttun?</Button>
              <p>
                Henüz bir hesabın yok mu?{" "}
                <span>
                  <Link>Kaydol</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
