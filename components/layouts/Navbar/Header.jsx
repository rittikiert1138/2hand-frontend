import React, { useState } from "react";
import Link from "next/link";
import { TfiSearch, TfiBag, TfiUser, TfiBarChart } from "react-icons/tfi";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = ({ auth }) => {
  const [profile, setProfile] = useState(false);

  return (
    <header className="w-full h-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-3">
            <div className="w-full bg-white h-20 pt-4">
              <Link href="/">
                <img
                  src="/icons/logo.png"
                  className="h-12 d-block cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-6">
            <div className="w-full bg-white h-20 px-12 pt-5">
              <div className="relative w-full h-10 ">
                <input
                  type="text"
                  className="border rounded h-10 w-full focus:outline-none inline-block align-middle pl-4 pr-12"
                  placeholder="ค้นหา"
                />
                <button className="absolute rounded  w-12 top-0 right-0 h-10">
                  <TfiSearch
                    style={{
                      fontSize: "20px",
                      display: "block",
                      margin: "0 auto",
                      color: "#aaaaaa",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full bg-white h-20 flex justify-end">
              {auth ? (
                <div className="pt-4 pb-4 flex w-[200px] relative">
                  <div
                    className=" w-full h-full flex pt-2.5 cursor-pointer"
                    onMouseOver={() => setProfile(true)}
                    onMouseLeave={() => setProfile(false)}
                  >
                    <TfiUser className="text-xl mr-3 mt-0.5" />
                    <span className="text-secondary">
                      {auth.user.name.substring(0, 20)}
                      {auth.user.name.length > 20 ? "..." : ""}
                    </span>
                    {profile && (
                      <div className="w-[250px] h-auto bg-white shadow-md absolute top-[64px] right-0 border-t border-gray-100">
                        <ul className="p-4">
                          <li className="relative h-10 pt-1.5 hover:text-primary  ease-in duration-100">
                            บัญชีของฉัน
                            <TfiUser className="absolute text-xl top-[10px] right-0 " />
                          </li>
                          <li className="relative h-10 pt-1.5 hover:text-primary  ease-in duration-100">
                            การซื้อของฉัน
                            <TfiBarChart className="absolute text-xl top-[10px] right-0 " />
                          </li>
                          <li
                            className="relative h-10 pt-1.5 hover:text-primary  ease-in duration-100"
                            onClick={() => signOut()}
                          >
                            ออกจากระบบ
                            <FiLogOut className="absolute right-0 top-[10px] text-xl" />
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="pt-7 flex w-[200px]">
                  <TfiUser className="text-xl mr-3 mt-0.5" />
                  <span className="text-secondary">
                    <Link href="/login">ลงชื่อเข้าใช้</Link> |{" "}
                    <Link href="/register">สมัครสมาชิก</Link>
                  </span>
                </div>
              )}
              <div className="w-14 h-20  text-center pt-4">
                <Link href="/checkout/cart">
                  <div className="w-auto h-10 relative pt-2.5 cursor-pointer">
                    <TfiBag className="text-2xl text-secondary mx-auto" />
                    <div className="text-xs bg-primary text-white w-6 h-6 rounded-full pt-0.5 absolute right-0 top-1 border border-white">
                      5
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
