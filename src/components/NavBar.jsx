import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Use (/) instead of (#) for the href attribute in the anchor tags.
  return (
    <nav className="text-white w-full flex items-center justify-between p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* LOVE THE LOGO */}
        <img
          src="/afifa.png"
          alt="logo"
          className="py-2 w-24 h-20" // You can use you sizing here, you just need to convert px to rem. Use this website.
        />
      </a>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-greyText rounded-lg md:hidden hover:bg-gray-100 hover:text-[#011d38] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-greyText dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      {/* Backdrop and menu container-start */}

      {/* Removed the unnecessary div here.*/}
      <div
        className={`${
          isOpen
            ? "block fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            : "hidden"
        } fixed  md:hidden`}
        id="navbar-default"
        onClick={() => setIsOpen(false)}
      >
        {/* Moved text color in ul to avoid repitions. Also removed the rounded and the flex cause you don't need it here and the onCilck too cause the href will refresh the page so he'll set isOpen to its default value. */}
        <ul className="font-sm p-4 mt-4 space-y-4 text-greyText w-44">
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#6EFFE1]">
              <span className="text-[#6EFFE1] pr-1">01.</span> About
            </a>
          </li>
          <li>
            <a href="#experience" className="block py-2 px-3 hover:text-[#6EFFE1]">
              <span className="text-[#6EFFE1] pr-1">02.</span> Experience
            </a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#6EFFE1]">
              <span className="text-[#6EFFE1] pr-1">03.</span> Education
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block py-2 px-3 rounded hover:text-[#6EFFE1]"
            >
              <span className="text-[#6EFFE1] pr-1">04.</span> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop and menu container-end */}

      {/* Ajusted this part too */}
      <div
        id="navbar-default"
        className=" hidden sm:flex  text-greyText w-full font-sm p-4 md:flex justify-end rtl:space-x-reverse "
      >
        <a href="#aboutMe" className="block py-2 px-3 hover:text-[#6EFFE1] ">
          <span className="text-sm text-[#6EFFE1]">01.</span> About
        </a>

        <a href="#experience" className="block py-2 px-3 hover:text-[#6EFFE1]">
          <span className="text-sm text-[#6EFFE1]">02.</span> Experience
        </a>

        <a href="/" className="block py-2 px-3 hover:text-[#6EFFE1]">
        <span className="text-sm text-[#6EFFE1]">03.</span> Education
        </a>

        <a href="/" className="block py-2 px-3 mr-4 hover:text-[#6EFFE1]">
        <span className="text-sm text-[#6EFFE1]">04.</span> Contact
        </a>
      </div>
    </nav>
  );
}
