import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Sidenav from "./Sidenav";

const Navbar = (props) => {
  const { sideNav, auth } = props;

  return (
    <>
      <Header auth={auth} />
      <Nav />
      {sideNav && <Sidenav sideNav={sideNav} />}
    </>
  );
};

export default Navbar;
