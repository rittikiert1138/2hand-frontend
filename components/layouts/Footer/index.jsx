import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 h-auto bg-primary pt-10 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-3 text-white">
            <h4 className="font-bold">บริษัท 123SHOP จำกัด มหาชน</h4>
            <h6>
              26/56 ถนนจันทน์ตัดใหม่ แขวงทุ่งมหาเมฆ เขตสาทร กรุงเทพฯ 10120
            </h6>
            <h4 className="mt-10">Call Center 02-222-2222</h4>
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
        </div>
        <div className="w-full text-white text-center mt-12 h-10  pt-2">
          <small>Copyright © 2021 123SHOP All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
