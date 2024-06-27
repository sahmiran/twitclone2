import React, { useState } from "react";
import "./Loginform.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
              {" "}
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
              <Button type="submit">İleri</Button>
              <Button>Şifreni mi unuttun?</Button>
              <p>Henüz bir hesabın yok mu?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
