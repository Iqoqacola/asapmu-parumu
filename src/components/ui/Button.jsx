// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavLinkButton = ({ icon: Icon, context, funcButton }) => {
  return (
    <NavLink
      to={funcButton}
      className={({ isActive }) =>
        `rounded-md transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
          isActive
            ? "text-[var(--Warning-color)] scale-105"
            : "text-[var(--Text-dark)] hover:text-[var(--Warning-color)]"
        }`
      }
      style={{
        fontFamily: "Open Sans, sans-serif",
        padding: "10px 18px",
      }}
    >
      {Icon && <Icon className="w-5 h-5 fill-current" />}
      {context && <p className="">{context}</p>}
    </NavLink>
  );
};

export const LinkButton = ({ funcButton, context }) => {
  return (
    <Link
      to={funcButton}
      className={`inline-block bg-[var(--Accent-color)] text-xl uppercase text-white px-6 py-3 font-bold rounded-lg shadow-xl hover:bg-[var(--Warning-color)] hover:scale-110 transform transition-all`}
    >
      {context}
    </Link>
  );
};
