import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-4 py-3 bg-white shadow-md">

      {/* Hamburger Menu, shows on smaller screens */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-3xl z-50" > ☰
      </button>

      {/* Navigation Menu, conditional styling applied  */}
      <ul className={`
          flex flex-col gap-4
          md:flex md:flex-row md:items-center md:gap-6

          absolute md:static
          top-full left-0

          w-full md:w-auto
          bg-white md:bg-transparent
          shadow-md md:shadow-none

          p-5 md:p-0
          transition-all duration-300 ease-in-out

          ${open ? "flex" : "hidden md:flex"}
        `}
      >
        <li>
          <a href="#about" className="block md:bg-blue-950 md:text-white md:px-6 md:py-2 md:rounded-full md:hover:bg-blue-800 text-gray-700">About </a> </li>

        <li> <a href="#addprojects"className="block md:bg-blue-950 md:text-white md:px-6 md:py-2 md:rounded-full md:hover:bg-blue-800 text-gray-700">Add Project</a></li>

        <li><a href="#projects"className="block md:bg-blue-950 md:text-white md:px-6 md:py-2 md:rounded-full md:hover:bg-blue-800 text-gray-700" > Projects</a></li>

        <li><a href="#contact"className="block md:bg-blue-950 md:text-white md:px-6 md:py-2 md:rounded-full md:hover:bg-blue-800 text-gray-700" > Contact </a></li></ul>
    </nav>
  );
};

export default NavBar;