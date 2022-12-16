import React, { useState } from "react";
import {
  TfiLineDouble,
  TfiAngleRight,
  TfiLayoutLineSolid,
} from "react-icons/tfi";

const Sidenav = () => {
  const [show, setShow] = useState(0);

  let sidenavData = [
    {
      id: 1,
      label: "Apple products",
      href: "/",
    },
    {
      id: 2,
      label: "Notebook",
      href: "/",
    },
    {
      id: 3,
      label: "ACCESSORIES NOTEBOOK",
      href: "/",
      lists: [
        {
          id: 1,
          label: "Mouse",
          href: "/",
        },
        {
          id: 2,
          label: "Keyboard",
          href: "/",
        },
        {
          id: 3,
          label: "Mouse pad",
          href: "/",
        },
      ],
    },
    {
      id: 4,
      label: "COMPUTER SET",
      href: "/",
      lists: [
        {
          id: 1,
          label: "Mouse",
          href: "/",
        },
        {
          id: 2,
          label: "Keyboard",
          href: "/",
        },
      ],
    },
    {
      id: 5,
      label: "COMPUTER HARDWARE (DIY)",
      href: "/",
    },
    {
      id: 6,
      label: "SSD / HARD DISK / STORAGE",
      href: "/",
    },
    {
      id: 7,
      label: "MONITOR",
      href: "/",
    },
    {
      id: 8,
      label: "MOUSE / PAD",
      href: "/",
      lists: [
        {
          id: 1,
          label: "Mouse",
          href: "/",
        },
        {
          id: 2,
          label: "Keyboard",
          href: "/",
        },
        {
          id: 3,
          label: "Mouse pad",
          href: "/",
        },
      ],
    },
    {
      id: 9,
      label: "KEYBOARD / COMBO SET",
      href: "/",
      lists: [
        {
          id: 1,
          label: "Mouse",
          href: "/",
        },
        {
          id: 2,
          label: "Keyboard",
          href: "/",
        },
      ],
    },
    {
      id: 10,
      label: "SPEAKER",
      href: "/",
    },
    {
      id: 11,
      label: "GAMING CHAIR & DESK",
      href: "/",
    },
    {
      id: 12,
      label: "ACCESSORIES",
      href: "/",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-3">
          <div
            className="w-full wrap_sidenav border-x"
            onMouseLeave={() => setShow(0)}
          >
            <ul className="bg-white">
              {sidenavData.length &&
                sidenavData.map((side, index) => (
                  <li
                    className="group h-10  flex pl-4 border-b cursor-pointer relative"
                    key={side.id}
                    onMouseOver={() => setShow(side.id)}
                  >
                    <TfiLineDouble className="text-secondary mt-3 text-xl mr-4" />
                    <span className="mt-2 text-secondary uppercase">
                      {side.label}
                    </span>
                    {side.lists?.length > 0 ? (
                      <>
                        <TfiAngleRight className="absolute right-2 top-3 text-secondary group-hover:right-0 ease-in duration-100" />
                        {show === side.id ? (
                          <div className="w-full absolute left-full top-0 border-x border-t">
                            <ul className="bg-white">
                              {side.lists?.length &&
                                side.lists.map((list, index) => (
                                  <li
                                    className="h-10  flex pl-4 border-b cursor-pointer"
                                    key={index}
                                  >
                                    <TfiLayoutLineSolid className="text-secondary mt-2.5 text-xl mr-4" />
                                    <span className="mt-2 text-secondary uppercase">
                                      {list.label}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ) : null}
                      </>
                    ) : null}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
