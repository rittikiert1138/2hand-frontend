import React from "react";

const Banner = () => {
  return (
    <div className="wrap_banner">
      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-9 col-start-4">
          <div
            className="banner rounded bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/banner.jpg")' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
