import React from "react";
import Table from "./Table";
import Header from "./Header";
import Image from "./Image";
import avatar from "../avatar.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

function Result() {
  return (
    <div>
      <Header />

      <div className="container">
        <div>
          <Image width={200} path={200} path={avatar} />
        </div>
        <div className="text-center">HOCANIN ADI</div>
        <Table />
      </div>
    </div>
  );
}

export default Result;
