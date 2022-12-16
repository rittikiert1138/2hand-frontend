import React from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  const { data: auth } = useSession();

  const { children, sideNav = false } = props;

  console.log("auth", auth);

  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar sideNav={sideNav} auth={auth} />
      <div style={{ minHeight: "calc(100vh - 177px)" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
