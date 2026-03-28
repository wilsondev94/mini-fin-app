import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { PATHS } from "@/constants/routes";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className=" shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="border border-gray-800 w-fit p-1 rounded-md">
          <Link to="/" className="text-lg text-black font-semibold ">
            Logo
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Transactions
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Cards
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Settings
          </Link>
        </nav>
        <div className="space-x-4">
          <Button onClick={() => void navigate(PATHS.LOGIN)}>Login</Button>
          <Button
            variant="secondary"
            onClick={() => void navigate(PATHS.SIGNUP)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
