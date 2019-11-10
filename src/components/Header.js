import React from "react";
import { PageHeader } from "antd";
import "./components.css";
import slogo from "../Slogo.png";
import Image from "./Image";

function Header() {
  return (
    <div>
      <PageHeader
        className="header"
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        title={
          <div>
            <b>FIRAT</b> ÜNİVERSİTESİ
          </div>
        }
      />
    </div>
  );
}
export default Header;
