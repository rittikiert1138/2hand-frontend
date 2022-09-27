import React from "react";
import { getProviders, signIn } from "next-auth/react";

const LoginPage = ({ providers }) => {
  console.log("providers", providers);

  return (
    <div className="bg-red-800">
      <button className="bg-gray-600" onClick={() => signIn("google")}>
        Google
      </button>
      <button className="bg-gray-400" onClick={() => signIn("facebook")}>
        Facebook
      </button>
      <button className="bg-gray-400" onClick={() => signIn("github")}>
        Github
      </button>
      <button className="bg-gray-400" onClick={() => signIn("line")}>
        Line
      </button>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default LoginPage;
