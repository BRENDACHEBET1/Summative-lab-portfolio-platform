import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className=" bg-white shadow-sm border-b border-gray-200 rounded-2xl">
      
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-linear-to-r from-slate-800 via-blue-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 hover:drop-shadow-2xl hover:shadow-slate-900/25 transition-all duration-300 ease-out shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4  md:text-left text-center cursor-default select-none border-2 border-slate-200/50">
          Portfolio Website
        </h1>

        {/* Navbar */}
        <NavBar />

      </div>

    </header>
  );
};

export default Header;
