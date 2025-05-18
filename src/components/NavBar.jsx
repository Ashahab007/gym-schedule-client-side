import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/addschedule"> Add Schedule</NavLink>
      <NavLink to="/allschedule"> All Schedule</NavLink>
    </>
  );
  return (
    <div className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <div className=""></div>
        <ul className="items-stretch space-x-3 flex">
          <li className="flex gap-6">{links}</li>
        </ul>
        <div className="items-center flex-shrink-0 flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
