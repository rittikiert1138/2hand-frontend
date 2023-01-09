import React from "react";
import Layout from "../../components/layouts/Layout";
import Link from "next/link";
import { TfiTrash, TfiAngleRight } from "react-icons/tfi";

const CartPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="w-full h-10 mt-4 mb-0.5">
          <ul className="flex">
            <li className="mr-2.5 flex uppercase">
              Home <TfiAngleRight className="text-xs mt-1.5 ml-2" />
            </li>
            <li className="mr-2.5 flex uppercase">
              Checkout <TfiAngleRight className="text-xs mt-1.5 ml-2" />
            </li>
            <li className="mr-2.5 uppercase">Cart</li>
          </ul>
        </div>
        <div className="grid grid-cols-12 gap-16 mt-0">
          <div className="col-span-9 ">
            <div className="w-full h-auto shadow-md border-t border-gray-100 rounded">
              <div className="w-full h-10 y rounded-tl rounded-tr border-b border-gray-100 pt-1.5 pl-4">
                <p>
                  รายการสินค้าที่อยู่ในรถเข็นของคุณ{" "}
                  <span className="font-bold">2 รายการ</span>
                </p>
              </div>
              <div className="grid grid-cols-12 gap-16 p-4">
                <div className="col-span-7">
                  <div className="flex">
                    <div
                      className="w-[150px] h-[110px]  bg-center bg-cover rounded mr-4"
                      style={{ backgroundImage: 'url("/images/product.jpg")' }}
                    ></div>
                    <div className="">
                      <p className="font-medium text-gray-400">
                        รหัสสินค้า : 14CS
                      </p>
                      <h6 className="font-bold">
                        MICROSOFT คอนโทรลเลอร์ Xbox + USB C (สีดำ) รุ่น
                        1V8-00014
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="pt-6">
                    <h6 className="font-bold">1490.00 บาท</h6>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="pt-6">
                    <div className="flex">
                      <button className="bg-primary text-white h-8 w-8 text-center text-2xl rounded-tl rounded-bl hover:shadow-md">
                        -
                      </button>
                      <input
                        type="text"
                        className="w-20 h-8 border focus:outline-none px-2 text-center"
                        value="1"
                      />
                      <button className="bg-primary text-white h-8 w-8 text-center text-2xl rounded-tr rounded-br hover:shadow-md">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="pt-7">
                    <TfiTrash className="text-2xl float-right cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-16 p-4">
                <div className="col-span-7">
                  <div className="flex">
                    <div
                      className="w-[150px] h-[110px]  bg-center bg-cover rounded mr-4"
                      style={{ backgroundImage: 'url("/images/product.jpg")' }}
                    ></div>
                    <div className="">
                      <p className="font-medium text-gray-400">
                        รหัสสินค้า : 14CS
                      </p>
                      <h6 className="font-bold">
                        MICROSOFT คอนโทรลเลอร์ Xbox + USB C (สีดำ) รุ่น
                        1V8-00014
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="pt-6">
                    <h6 className="font-bold">1490.00 บาท</h6>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="pt-6">
                    <div className="flex">
                      <button className="bg-primary text-white h-8 w-8 text-center text-2xl rounded-tl rounded-bl hover:shadow-md">
                        -
                      </button>
                      <input
                        type="text"
                        className="w-20 h-8 border focus:outline-none px-2 text-center"
                        value="1"
                      />
                      <button className="bg-primary text-white h-8 w-8 text-center text-2xl rounded-tr rounded-br hover:shadow-md">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="pt-7">
                    <TfiTrash className="text-2xl float-right cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="rounded shadow-md border-t border-gray-100">
              <div className="w-full h-10  rounded-tl rounded-tr  pt-1.5 pl-4 border-b border-gray-100">
                <p>สรุปรายการสั่งซื้อ (2)</p>
              </div>
              <div className="grid grid-cols-12 gap-16 p-4">
                <div className="col-span-6">รายการสินค้า</div>
                <div className="col-span-6 text-right">117.00 บาท</div>
              </div>
              <hr className="mx-4" />
              <div className="grid grid-cols-12 gap-16 px-4">
                <div className="col-span-6">ค่าจัดส่ง</div>
                <div className="col-span-6 text-right">
                  <small>ราคานี้ยังไม่รวมค่าจัดส่ง</small>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-16 p-4">
                <div className="col-span-6 pt-1">
                  <p>ยอดรวมทั้งสิ้น</p>
                  <small>(VAT incl. if any)</small>
                </div>
                <div className="col-span-6 text-right">
                  <h4 className="font-bold text-primary">117.00 บาท</h4>
                </div>
                <div className="col-span-12">
                  <button className="w-full bg-primary text-white h-10 rounded hover:bg-primary-light ease-in duration-100">
                    ยืนยันคำสั่งซื้อ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="grid grid-cols-10 gap-4">
          <div class="col-start-3 col-end-9 col-span-4">
            <div className="w-full h-auto bg-white rounded pt-10 px-20  pb-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] text-center">
              <h1>ไม่มีสินค้าในรถเข็นของคุณ</h1>
              <div className="mt-6">
                <Link href="/">
                  <button className="h-10 w-1/4 bg-primary hover:bg-primary-light rounded text-white hover:shadow-md ease-in duration-100">
                    เลือกซื้อสินค้า
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default CartPage;
