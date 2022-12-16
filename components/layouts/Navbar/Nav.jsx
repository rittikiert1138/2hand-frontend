import React from "react";
import { TfiMenu } from "react-icons/tfi";

const Nav = () => {
  return (
    <nav className="w-full bg-primary h-10 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-3">
            <div className="h-10 ">
              <button className="h-10 bg-primary-light text-white w-full text-left flex uppercase pl-4">
                <TfiMenu className="text-xl mt-2.5 mr-4" />
                <span className="mt-2">All Categories</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
