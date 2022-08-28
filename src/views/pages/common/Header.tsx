import React from "react";
import logo from "../../../assets/images/logo.png";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-100 ">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <input type="text" className="p-3 w-96 border-gray-200 rounded" />
          <div className="m-2">
            <Icon icon="akar-icons:search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
