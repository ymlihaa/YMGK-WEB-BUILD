import React from "react";
import Table from "./Table";
import Header from "./Header";
import Image from "./Image";
import avatar from "../avatar.jpg";
import Checkbox from "./Checkbox";

import "bootstrap/dist/css/bootstrap.min.css";

function Result() {
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
          <Checkbox />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Result;
