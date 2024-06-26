import React from "react";
import "./Loginform.css";

import { Button } from "@mui/material";

function Loginform() {
  return (
    <div className="page">
      <div className="form">
        <div className="formheader">
          <Button></Button>
          <div className="formheaderlogo"></div>
        </div>

        <div className="container">
          <div className="titletext">
            <h2>X'e giriş yap</h2>
          </div>
          <Button>
            <span> </span>
            Google ile kaydol
          </Button>
          <Button>
            <span></span>Apple ile kaydol
          </Button>

          <input
            className="textkutucugu"
            type="text"
            placeholder="Telefon numarası,e-posta veya kullanıcı adı"
          ></input>
          <Button>İleri</Button>
          <Button>Şifreni mi unuttun?</Button>
          <p>Henüz bir hesabın yok mu?</p>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
