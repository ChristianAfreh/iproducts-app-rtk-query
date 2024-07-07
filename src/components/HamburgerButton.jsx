import { useState } from "react";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <span className="flex">
      <button
        className="space-y-1"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div
          className={`w-8 h-1 bg-[#555555] rounded-lg transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-[#555555] rounded-lg transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-[#555555] rounded-lg transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>
    </span>
  );
}
