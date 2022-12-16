import React, { useState } from "react";
import {
  TfiAngleRight,
  TfiCreditCard,
  TfiMoney,
  TfiCalendar,
} from "react-icons/tfi";
import Layout from "../../components/layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Shelf from "../../components/home/Shelf";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
      <div className="container mx-auto h-auto">
        <div className="w-full h-10 mt-4 mb-0.5">
          <ul className="flex">
            <li className="mr-2.5 flex uppercase">
              Home <TfiAngleRight className="text-xs mt-1.5 ml-2" />
            </li>
            <li className="mr-2.5 flex uppercase">
              Product <TfiAngleRight className="text-xs mt-1.5 ml-2" />
            </li>
            <li className="mr-2.5 uppercase">Product Detail</li>
          </ul>
        </div>
        <div className="grid grid-cols-12 gap-16 mb-4">
          <div className="col-span-9">
            <div className="grid grid-cols-2 gap-16">
              <div className="col-span-1">
                <div className="w-full">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={false}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div
                        className="w-full slide_product bg-center bg-cover rounded"
                        style={{
                          backgroundImage: "url('/images/product.jpg')",
                        }}
                      ></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="w-full slide_product bg-center bg-cover rounded"
                        style={{
                          backgroundImage: "url('/images/product2.jpg')",
                        }}
                      ></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="w-full slide_product bg-center bg-cover rounded"
                        style={{
                          backgroundImage: "url('/images/product3.jpg')",
                        }}
                      ></div>
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={16}
                    slidesPerView={4}
                    freeMode={false}
                    watchSlidesProgress={false}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mt-4"
                  >
                    <SwiperSlide className="cursor-pointer rounded">
                      <img src="/images/product.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="cursor-pointer rounded">
                      <img src="/images/product2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="cursor-pointer rounded">
                      <img src="/images/product3.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-span-1">
                <p className="font-medium text-gray-400">รหัส: 1J0L010</p>
                <h4 className="mt-2">
                  MICROSOFT คอนโทรลเลอร์ Xbox + USB C (สีดำ) รุ่น 1V8-00014
                </h4>
                <p className="mt-4">
                  <span className="text-2xl font-bold">1490.00 </span> บาท
                </p>
                <div className="grid grid-cols-6 gap-16 mt-4">
                  <div className="col-span-1">จำนวน</div>
                  <div className="col-span-5">
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
                <div className="grid grid-cols-5 gap-16 mt-6">
                  <div className="col-span-2">
                    <button className="w-full bg-white border border-primary h-10 rounded hover:shadow-lg ease-in duration-100">
                      ซื้อทันที
                    </button>
                  </div>
                  <div className="col-span-2">
                    <button className="w-full bg-primary border border-primary hover:bg-primary-light hover:border-primary-light h-10 rounded text-white hover:shadow-lg ease-in duration-100">
                      ใส่ตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="w-full h-auto bg-primary-light rounded p-4 text-white">
              <p>ช่องทางการชำระเงิน</p>
              <ul>
                <li className="h-10 border-b pt-1.5 flex">
                  <div className="w-8 h-8 ">
                    <TfiCreditCard className="mt-1 mr-3 text-xl" />
                  </div>
                  <p>บัตรเครดิต</p>
                </li>
                <li className="h-10 border-b pt-1.5 flex">
                  <div className="w-8 h-8 ">
                    <TfiMoney className="mt-1 mr-3 text-lg" />
                  </div>
                  <p>เก็บเงินปลายทาง</p>
                </li>
                <li className="h-10 pt-1.5 flex">
                  <div className="w-8 h-8 ">
                    <TfiCalendar className="mt-1 mr-3 text-lg" />
                  </div>
                  <p>ผ่อนชำระ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="mb-4 mt-2">
          <h4 className="font-bold">รายละเอียดสินค้า</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <hr />
        <Shelf title="คุณอาจชอบสินค้านี้" />
      </div>
    </Layout>
  );
};

export default ProductDetail;
