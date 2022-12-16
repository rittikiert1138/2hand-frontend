import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <Link href="/product/1">
        <div className="w-full bg-white border rounded p-4 cursor-pointer hover:shadow-lg ease-in duration-100">
          <div
            className="w-full h-56 bg-slate-500 rounded bg-cover bg-center"
            style={{ backgroundImage: "url('/images/product.jpg')" }}
          ></div>
          <div className="text-left">
            <h6 className="mt-2">Xbox Gaming Console 500GB</h6>
            <p className="mt-4">
              <span className="text-xl font-bold">1490.00</span> บาท
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 mt-4">
            <div className="col-span-1">
              <button className="w-full bg-white border border-primary h-9 rounded hover:shadow-lg ease-in duration-100">
                ซื้อทันที
              </button>
            </div>
            <div className="col-span-1">
              <button className="w-full bg-primary border border-primary hover:bg-primary-light hover:border-primary-light h-9 rounded text-white hover:shadow-lg ease-in duration-100">
                ใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
