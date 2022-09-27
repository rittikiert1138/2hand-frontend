import React from "react";
import { getProviders, signIn } from "next-auth/react";

const LoginPage = ({ providers }) => {
  console.log("providers", providers);

  return <div>Home</div>;
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default LoginPage;
