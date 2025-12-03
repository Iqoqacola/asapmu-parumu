import { useEffect, useState } from "react";
import { LinkButton } from "./button";

export const Card = ({ title, context }) => {
  return (
    <div className="bg-[var(--Background-color)] rounded-lg shadow-lg p-4 w-72 sm:w-80 md:w-96 flex items-center flex-col">
      <h1 className="text-[var(--Warning-color)] text-3xl font-bold mb-2 uppercase">
        {title}
      </h1>
      <p className="text-[var(--Text-grey)] text-xl text-center font-semibold">
        {context}
      </p>
    </div>
  );
};

export const FinishPopUp = ({
  progress,
  onClose,
  contextClose,
  navigate,
  title,
  context,
  contextNavigate,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50); // animasi muncul
  }, []);

  const handleClose = () => {
    setAnimate(false); // animasi keluar
    setTimeout(() => onClose(), 300); // delay
  };

  return (
    <div
      className={`
        fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300
        ${animate ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`
          card bg-[var(--Background-color)] rounded-2xl shadow-black shadow-lg z-40 w-md
          transform transition-all duration-300
          ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        <div className="card-body p-8 flex gap-4">
          <h2 className="text-[var(--Text-grey)] text-center text-2xl font-bold drop-shadow-xl drop-shadow-white">
            {title}
          </h2>
          {progress ? progress : ""}
          <p className="text-[var(--Text-grey)] text-lg text-center font-semibold">
            {context}
          </p>
          <div className="justify-end card-actions gap-5 mt-4">
            <LinkButton context={contextClose} onClick={handleClose} />
            <LinkButton context={contextNavigate} funcButton={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};
