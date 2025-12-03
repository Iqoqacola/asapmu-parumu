import { useState } from "react";
import { NavLinkButton } from "/src/components/ui/Button";
import BerandaIcon from "/public/assets/berandaIcon.svg?react";
import PenyuluhanIcon from "/public/assets/penyuluhanIcon.svg?react";
import TentangKamiIcon from "/public/assets/tentangKamiIcon.svg?react";
import LoginIcon from "/public/assets/loginIcon.svg?react";
import UserIcon from "/public/assets/userIcon.svg?react";
import { UserButton } from "../ui/Button";

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed z-50 shadow-md"
      style={{
        width: "100%",
        height: "10vh",
        background: "var(--Background-color)",
        color: "var(--Text-dark)",
      }}
    >
      <div className="flex justify-between items-center px-8 w-full h-full font-bold text-xl">
        {/* LOGO JUDUL */}
        <div
          className="flex gap-3 font-medium items-center"
          style={{ fontFamily: "BBH Sans Hegarty, sans-serif" }}
        >
          <img className="w-8 h-8" src="/assets/paru-paru.svg" alt="logo" />
          <p className="text-xl" style={{ color: "var(--Warning-color)" }}>
            Asapmu Parumu
          </p>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex gap-15 items-center">
          <NavLinkButton
            icon={BerandaIcon}
            context={"Beranda"}
            a
            funcButton={"/"}
          />
          <NavLinkButton
            icon={PenyuluhanIcon}
            context={"Penyuluhan"}
            funcButton={"/penyuluhan"}
          />
          <NavLinkButton
            icon={TentangKamiIcon}
            context={"Tentang Kami"}
            funcButton={"/tentangkami"}
          />

          {user ? (
            <UserButton icon={UserIcon} user={user} onLogout={onLogout} />
          ) : (
            <NavLinkButton
              icon={LoginIcon}
              context={"Masuk"}
              funcButton={"/masuk"}
            />
          )}
        </div>

        {/* --- HAMBURGER BUTTON --- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-md hover:bg-black/5 transition"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div
          className="md:hidden absolute left-0 w-full shadow-lg flex flex-col items-center pt-6 pb-8 transition-all duration-300 ease-in-out border-t"
          style={{
            top: "10vh",
            background: "var(--Background-color)",
            color: "var(--Text-dark)",
            borderTopColor: "rgba(0,0,0,0.05)",
          }}
        >
          {/* Menu Links */}
          <div className="flex flex-col gap-4 w-full px-8">
            <NavLinkButton
              icon={BerandaIcon}
              context={"Beranda"}
              a
              funcButton={"/"}
            />
            <NavLinkButton
              icon={PenyuluhanIcon}
              context={"Penyuluhan"}
              funcButton={"/penyuluhan"}
            />
            <NavLinkButton
              icon={TentangKamiIcon}
              context={"Tentang Kami"}
              funcButton={"/tentangkami"}
            />
          </div>

          {/* Separator Line */}
          <div className="w-full px-6 my-6">
            <div className="border-b-2 border-dashed border-gray-200"></div>
          </div>

          {/* User / Login Section Mobile */}
          <div className="w-full px-8">
            {user ? (
              // TAMPILAN LOGOUT MOBILE (Updated)
              <div className="bg-white/50 border border-gray-200 rounded-xl p-4 flex flex-col gap-4 items-center shadow-sm">
                {/* Info User */}
                <div className="flex items-center gap-3 w-full">
                  <div className="bg-gray-100 p-2.5 rounded-full text-gray-600">
                    <UserIcon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-bold truncate text-gray-800">
                    {user.namaLengkap || user.username || "Pengguna"}
                  </span>
                </div>

                {/* Tombol Logout Spesial */}
                <button
                  onClick={handleMobileLogout}
                  className="w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 font-bold transition-colors"
                  style={{
                    backgroundColor: "#FEE2E2", // Merah muda
                    color: "#DC2626", // Merah tua
                    border: "1px solid #FECACA",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Keluar
                </button>
              </div>
            ) : (
              <NavLinkButton
                icon={LoginIcon}
                context={"Masuk"}
                funcButton={"/masuk"}
              />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
