import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
