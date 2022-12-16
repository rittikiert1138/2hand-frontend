import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import Layout from "../components/layouts/Layout";

const RegisterPage = () => {
  const router = useRouter();
  const { data: auth } = useSession();

  React.useEffect(() => {
    if (auth) router.push("/");
  }, [auth]);

  return (
    <Layout>
      <div className="container mx-auto pt-[24px]">
        <div class="grid grid-cols-10 gap-4">
          <div class="col-start-3 col-end-9 col-span-4">
            <div className="w-full h-auto bg-white rounded pt-4 px-20  pb-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)]">
              <div className="text-center mt-2">
                <h1 className="text-primary">สมัครสมาชิก</h1>
                <p>กรุณากรอกข้อมูลเพื่อลงทะเบียน พร้อมรับสิทธิพิเศษ</p>
              </div>
              <div className="grid grid-cols-12 gap-16 mt-4">
                <div className="col-span-6">
                  <div>
                    <label>
                      ชื่อ <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="ชื่อ"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label>
                      นามสกุล <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="นามสกุล"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label>
                      อีมล <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="อีมล"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label>
                      รหัสยืนยัน <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="รหัสยืนยัน"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label>
                      รหัสผ่าน <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="รหัสผ่าน"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label>
                      ยืนยันรหัสผ่าน <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="ยืนยันรหัสผ่าน"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label>
                      เบอร์โทรศัพท์ <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 border rounded focus:outline-none px-4 mt-1"
                      placeholder="เบอร์โทรศัพท์"
                    />
                  </div>
                </div>
                <div className="col-span-6 col-start-4 col-end-10">
                  <div className="mt-6">
                    <button className="h-10 w-full bg-primary hover:bg-primary-light rounded text-white hover:shadow-md ease-in duration-100">
                      ลงทะเบียน
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <p>หรือเข้าสู่ระบบด้วย</p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <div
                      className="w-10 h-10 bg-white mx-2 rounded cursor-pointer"
                      onClick={() => signIn("facebook")}
                    >
                      <img
                        src="/icons/Facebook.png"
                        className="w-full h-full"
                      />
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
                      หากมีบัญชีแล้ว?{" "}
                      <Link href="/login">
                        <span className="underline decoration-1 cursor-pointer text-blue-600">
                          เข้าสู่ระบบ
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
      </div>
    </Layout>
  );
};

export default RegisterPage;
