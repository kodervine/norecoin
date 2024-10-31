const Navbar = () => {
  return (
    <header className="navbar bg-white border-b px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg">Norecoin</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#bcd9d9] flex items-center justify-center">
            <span className="text-[#33BBB9] text-sm font-medium">U</span>
          </div>
          <span className="text-sm font-medium hidden sm:block">User</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
