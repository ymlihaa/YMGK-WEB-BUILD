import React from "react";
import { PageHeader } from "antd";

function Header() {
  return (
    // <Navbar className="navbar" variant="light" bg="light">
    //   <Navbar.Brand>
    //     <Media>
    //       <img width={70} height={70} src={logo} alt="Generic placeholder" />
    //       <Media.Body>
    //         <h1>FIRAT ÜNİVERSİTESİ</h1>
    //       </Media.Body>
    //     </Media>
    //   </Navbar.Brand>
    // </Navbar>

    <div>
      <PageHeader
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        title="FIRAT ÜNİVERSİTESİ"
      />
    </div>
  );
}
export default Header;
