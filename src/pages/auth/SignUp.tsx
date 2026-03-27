import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="border w-fit p-1 rounded-md mt-2 ml-2">
        <Link to="/" className="hover:text-blue-600 text-white">
          Logo
        </Link>
      </div>
      <div className="text-white mx-auto my-auto">This is sign up page</div>;
    </>
  );
}
