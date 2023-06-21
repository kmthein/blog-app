import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  py-3 flex items-center justify-between">
      <Link to="/">
        <h4 className="font-bold text-lg">MYBLOG</h4>
      </Link>
      <div className="font-semibold flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-cyan-950 text-white px-2 py-2 w-[80px] text-center" : "py-2"
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/create-post/"
          className={({ isActive }) =>
            isActive ? "bg-cyan-950 text-white px-2 py-2" : "py-2"
          }
        >
          Create Post
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
