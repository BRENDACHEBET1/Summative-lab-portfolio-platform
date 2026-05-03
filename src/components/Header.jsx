import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className=" bg-white shadow-sm border-b border-gray-200 rounded-2xl">

      <div className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Title */}
        <h1 style={{ fontFamily: "'Great Vibes', cursive" }} className="text-3xl sm:text-4xl text-blue-900 italic md:text-5xl hover:scale-105 text-center md:text-left ">Portfolio Website</h1>
        
        {/* Navbar */}
        <NavBar />

      </div>

    </header>
  );
};

export default Header;
