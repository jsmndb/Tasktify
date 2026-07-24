function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          📝 Taskify
        </h1>

        <p className="text-gray-600">
          👤 Guest
        </p>
      </div>
    </nav>
  );
}

export default Navbar;