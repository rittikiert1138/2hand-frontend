import React from "react";
import { getProviders } from "next-auth/react";
import Layout from "../components/layouts/Layout";
import Banner from "../components/home/Banner";
import Shelf from "../components/home/Shelf";

const LoginPage = ({ providers }) => {
  return (
    <Layout sideNav={true}>
      <div className="container mx-auto">
        <Banner />
        <Shelf seeAll={true} title="สินค้าขายดี" />
        <Shelf seeAll={true} title="สินค้ายอดนิยม" />
        <Shelf seeAll={true} title="สินค้ามาใหม่" />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default LoginPage;
