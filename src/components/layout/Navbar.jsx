import { NavLinkButton } from "/src/components/ui/Button";
import BerandaIcon from "/public/assets/berandaIcon.svg?react";
import PenyuluhanIcon from "/public/assets/penyuluhanIcon.svg?react";
import TentangKamiIcon from "/public/assets/tentangKamiIcon.svg?react";
import LoginIcon from "/public/assets/loginIcon.svg?react";

const Navbar = () => {
  return (
    <nav
      className="flex justify-around font-bold text-xl px-8 text-xl shadow-md fixed"
      style={{
        width: "100%",
        height: "10vh",
        background: "var(--Background-color)",
        color: "var(--Text-dark)",
      }}
    >
      {/* LOGO JUDUL  */}
      <div
        className="flex gap-3 font-medium items-center"
        style={{
          fontFamily: "BBH Sans Hegarty, sans-serif",
        }}
      >
        <img className="w-8 h-8" src="/assets/paru-paru.svg" alt="logo" />
        <p
          className="text-xl"
          style={{
            color: "var(--Warning-color)",
          }}
        >
          Asapmu Parumu
        </p>
      </div>
      {/* NavLink  */}
      <div className="flex gap-15">
        <NavLinkButton
          icon={BerandaIcon}
          context={"Beranda"}
          a
          funcButton={"/"}
        ></NavLinkButton>
        <NavLinkButton
          icon={PenyuluhanIcon}
          context={"Penyuluhan"}
          funcButton={"/penyuluhan"}
        ></NavLinkButton>
        <NavLinkButton
          icon={TentangKamiIcon}
          context={"Tentang Kami"}
          funcButton={"/tentangkami"}
        ></NavLinkButton>
      </div>{" "}
      {/* Login  */}
      <NavLinkButton
        icon={LoginIcon}
        context={"Masuk"}
        funcButton={"/masuk"}
      ></NavLinkButton>
    </nav>
  );
};

export default Navbar;
