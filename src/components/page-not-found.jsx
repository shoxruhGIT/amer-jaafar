import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-[550px] flex flex-col items-center justify-center bg-[#070809] text-white px-4">
      <h1 className="text-[120px] font-bold leading-none">404</h1>
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-center max-w-md text-gray-400 mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-[#E1A23C] transition text-white px-6 py-3 rounded-lg text-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
