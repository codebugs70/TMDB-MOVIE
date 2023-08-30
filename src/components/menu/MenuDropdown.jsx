import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiMovie2Line } from "react-icons/ri";
import { Fragment } from "react";
import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
/* ====================================================== */

const MenuDropdown = () => {
  const links = [
    { label: "Movies", href: "/movies", icon: <RiMovie2Line /> },
    { label: "Home", href: "/", icon: <AiOutlineHome /> },
    { label: "Settings", icon: <AiOutlineSetting /> },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="w-full">
        <AiOutlineBars className="text-3xl hover:text-saga" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-40 right-1 min-w-[150px] w-full p-2 text-white origin-bottom rounded-md shadow-lg bg-darkSaga top-[30px] ">
          {links.map((link) => (
            <Menu.Item key={link.label} as={Fragment}>
              {({ active }) => (
                <Link
                  to={link.href}
                  className={`${
                    active ? "text-saga" : ""
                  } flex items-center gap-2 text-sm py-2 px-3 cursor-pointer`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-lg">{link.label}</span>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
