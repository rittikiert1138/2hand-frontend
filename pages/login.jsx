import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";
import Layout from "../components/layouts/Layout";

const LoginPage = ({ providers }) => {
  const router = useRouter();
  const { data: auth } = useSession();

  React.useEffect(() => {
    if (auth) router.push("/");
  }, [auth]);

  return (
    <Layout>
      <div className="container mx-auto pt-[100px]">
        <div class="grid grid-cols-7 gap-4">
          <div class="col-start-3 col-end-6 col-span-4">
            <div className="w-full h-auto bg-white rounded pt-10 px-20  pb-16 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)]">
              <div className="text-center mt-2">
                <h1 className="text-primary">เข้าสู่ระบบ</h1>
                <p>กรุณาล็อคอินเพื่อเข้าสู่ระบบ</p>
              </div>
              <div>
                <div className="mt-6">
                  <label>เบอร์โทรศัพท์ หรือ อีเมล</label>
                  <input
                    type="text"
                    className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                  />
                </div>
                <div className="mt-4">
                  <label>รหัสผ่าน</label>
                  <input
                    type="password"
                    className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                  />
                </div>
                <div className="mt-6">
                  <button className="h-10 w-full bg-primary hover:bg-primary-light rounded text-white hover:shadow-md ease-in duration-100">
                    เข้าสู่ระบบ
                  </button>
                </div>
                <div className="flex justify-center mt-6">
                  <div
                    className="w-10 h-10 bg-white mx-2 rounded cursor-pointer"
                    onClick={() => signIn("facebook")}
                  >
                    <img src="/icons/Facebook.png" className="w-full h-full" />
                  </div>
                  <div
                    className="w-10 h-10 bg-white mx-2 rounded cursor-pointer"
                    onClick={() => signIn("google")}
                  >
                    <img src="/icons/google.png" className="w-full h-full" />
                  </div>
                  <div
                    className="w-10 h-10 bg-white mx-2 rounded cursor-pointer"
                    onClick={() => signIn("line")}
                  >
                    <img src="/icons/line.png" className="w-full h-full" />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p>
                    หากยังไม่มีบัญชี?{" "}
                    <Link href="/register">
                      <span className="underline decoration-1 cursor-pointer text-blue-600">
                        สมัครสมาชิก
                      </span>
                    </Link>{" "}
                    ที่นี่
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
