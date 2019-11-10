import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";
import Image from "./Image";
import avatar from "../avatar.jpg";
import Checkbox from "./Checkbox";

import "bootstrap/dist/css/bootstrap.min.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { isTrue: false };
  }

  // ---ÖNEMLİ--- GÖREV
  /*
  open Table Fonksiyonunun yazılma sebebi :
  Eğerki current state true olursa table'ı göster mantığını çalıştırabilmek içindir.
  Burada currentState parametresine checkbox componentinde seçim yapıldıktan sonra true değeri atanacaktır.
  Bunu şu anda yapamadım.
  İlerlemesi gereken 1 adım .  
  */

  openTable(currentState) {
    console.log("true");
    this.setState({
      isTrue: currentState
    });
  }

  render() {
    const element =
      this.state.isTrue === true ? <Table /> : console.log("açma");

    return (
      <div>
        <Header />

        <div className="container">
          <div>
            <Image width={200} path={200} path={avatar} />
          </div>
          <div className="text-center">
            BURAYA LOGİN YAPMIŞ HOCANIN ADI GELİCEK
          </div>
          <div className="text-center">
            <Checkbox onTableOpen={this.openTable} />
          </div>
          {element}
          <div className="text-center">
            <button type="button" class="btn btn-danger">
              Log-Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
