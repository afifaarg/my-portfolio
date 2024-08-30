import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white">
      <div className="w-full flex items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/afifa.png"
            alt="logo"
            className="py-2"
            style={{ width: '100px', height: '80px' }} // Adjust size as needed
          />
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-greyText rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-greyText dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Backdrop and menu container */}
        <div
          className={`${
            isOpen ? 'fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm' : 'hidden'
          } md:hidden`}
          onClick={() => setIsOpen(false)} // Close the menu when backdrop is clicked
        >
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } fixed top-0 right-0 w-4/5 md:w-1/2 text-white h-full z-50`}
            id="navbar-default"
          >
            <ul className="font-sm flex flex-col p-4 mt-4 rounded-lg space-y-4">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#6EFFE1] pr-1">01.</span> About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#6EFFE1] pr-1">02.</span> Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#6EFFE1] pr-1">03.</span> Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#6EFFE1] pr-1">04.</span> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-sm flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1] md:hover:text-[#6EFFE1] md:bg-transparent md:p-0"
              >
                <span className="text-[#6EFFE1] pr-1">01.</span> About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1] md:hover:text-[#6EFFE1] md:bg-transparent md:p-0"
              >
                <span className="text-[#6EFFE1] pr-1">02.</span> Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-greyText rounded hover:text-[#6EFFE1] md:hover:text-[#6EFFE1] md:bg-transparent md:p-0"
              >
                <span className="text-[#6EFFE1] pr-1">03.</span> Education
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 mr-4 text-greyText rounded hover:text-[#6EFFE1] md:hover:text-[#6EFFE1] md:bg-transparent md:p-0"
              >
                <span className="text-[#6EFFE1] pr-1">04.</span> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
