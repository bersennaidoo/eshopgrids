import React from "react";
import { Link, Outlet } from "react-router-dom";

type LayoutProps = {}

function Layout(props: LayoutProps) {
  return (
    <div className="container">
          <Outlet />
    </div>
  );
}

export default Layout;
