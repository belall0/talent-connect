import logo from './../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const setStyles = ({ isActive }) => {
    return isActive
      ? 'font-semibold text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'font-semibold text-white hover:text-white rounded-md px-3 py-2';
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 h-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">Tech Jobs</span>
            </Link>

            {/* Navigation Bar */}
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={setStyles}>
                  Home
                </NavLink>

                <NavLink to="/jobs" className={setStyles}>
                  Jobs
                </NavLink>

                <NavLink to="/add-job" className={setStyles}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
