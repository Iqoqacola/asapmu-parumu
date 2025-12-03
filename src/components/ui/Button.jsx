// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
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

export const LinkButton = ({ funcButton, context, onClick }) => {
  return (
    <Link
      to={funcButton}
      onClick={onClick}
      className={`inline-block w-fit bg-[var(--Accent-color)] sm:text-md md:text-xl uppercase text-white px-6 py-3 font-bold rounded-lg shadow-xl hover:bg-[var(--Warning-color)] hover:scale-110 transform transition-all`}
    >
      {context}
    </Link>
  );
};

export const UserButton = ({ icon: Icon, user, onLogout }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    onLogout();
  };

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      {/* Tombol yang menampilkan nama user */}
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 font-bold cursor-pointer"
      >
        {Icon && <Icon className="w-5 h-5 fill-current" />}
        {user.namaLengkap}
        {/* Icon panah ke bawah */}
        <svg
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Menu Dropdown yang muncul/hilang */}
      {isDropdownOpen && (
        <div className="absolute top-14 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border">
          <button
            onClick={handleLogoutClick}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
