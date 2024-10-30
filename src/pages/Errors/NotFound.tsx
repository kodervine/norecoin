import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Page not found
      </h2>
      <p>
        We are unable to find this page. Please return to home and try again
      </p>
      <Link to="/dashboard" className="p-4 rounded-md bg-rose-500">
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
