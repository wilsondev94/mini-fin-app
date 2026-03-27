import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className=" shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold ">Logo</h1>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#" className="hover:text-blue-600">
            Dashboard
          </Link>
          <a href="#" className="hover:text-blue-600">
            Transactions
          </a>
          <a href="#" className="hover:text-blue-600">
            Cards
          </a>
          <a href="#" className="hover:text-blue-600">
            Settings
          </a>
        </nav>

        <button
          className={
            "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          }
        >
          Login
        </button>
      </div>
    </header>
  );
}
