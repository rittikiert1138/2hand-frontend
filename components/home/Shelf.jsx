import React from "react";
import Card from "../product/Card";
import { TfiAngleRight } from "react-icons/tfi";

const Shelf = (props) => {
  const { title, seeAll = false } = props;

  return (
    <div className="text-center mt-10">
      <div className="grid grid-cols-12 gap-16 pt-4">
        <div className="col-span-6 col-start-4 ">
          <h2>{title}</h2>
        </div>
        {seeAll && (
          <div className="col-span-3  text-right pt-5">
            <h6 className="font-medium inline-flex cursor-pointer">
              <span className="decoration-0 underline hover:decoration-1">
                ดูทั้งหมด
              </span>{" "}
              <TfiAngleRight className="text-sm mt-1 ml-1" />
            </h6>
          </div>
        )}
      </div>

      <div className="grid grid-cols-10 gap-16 pt-4">
        <div className="col-span-2">
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Shelf;
