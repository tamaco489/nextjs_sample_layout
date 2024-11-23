'use client';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="text-2xl font-bold">Company Name</div>
      <nav className="flex-grow">
        <ul className="flex space-x-6 justify-center">
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div className="ml-4 flex space-x-2">
        <a
          href="#sign-in"
          className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Sign In
        </a>
        <a
          href="#sign-up"
          className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Sign Up
        </a>
      </div>
      </header>
  );
};

export default Header;
