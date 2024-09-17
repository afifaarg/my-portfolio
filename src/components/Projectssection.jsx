import { useState } from "react";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(null);
  const [activeTab, setActiveTab] = useState("chosen"); // State to manage active tab

  // Open the carousel with the clicked image
  const openCarousel = (image) => {
    setCurrentImage(image);
  };

  // Close the carousel
  const closeCarousel = () => {
    setCurrentImage(null);
  };

  const erpImages = [
    "/portfolio-afifa/erp_app/example1.png",
    "/portfolio-afifa/erp_app/example2.png",
  ];
  const crmImages = [
    "/portfolio-afifa/crm_app/example1.png",
    "/portfolio-afifa/crm_app/example2.png",
  ];
  const PortfolioImages = [
    "/my_portfolio/example1.png",
    "/my_portfolio/example2.png",
  ];

  return (
    <div>
      <section
        className="min-h-screen flex flex-col items-center justify-center py-10 text-center sm:text-left w-3/5 sm:w-3/4 mx-auto text-greyText"
        id="projects"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="h-px bg-gray-100 w-36"></div>
          <h1 className="text-[#6effe2dc] font-bold text-3xl">My Projects</h1>
          <div className="h-px bg-gray-100 w-36"></div>
        </div>
        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-8">
          <div
            className={`relative  cursor-pointer px-4 py-2 text-lg font-semibold text-white border-none ${
              activeTab === "chosen"
                ? "text-[#6EFFE1] border-2 border-[#6EFFE1]"
                : "text-white"
            } transition-all duration-300`}
            onClick={() => setActiveTab("chosen")}
          >
            Chosen Projects
          </div>
          <div
            className={`relative  cursor-pointer px-4 py-2 text-lg font-semibold text-white border-none ${
              activeTab === "noteworthy"
                ? "text-[#6EFFE1] border-2 border-[#6EFFE1]"
                : "text-white"
            } transition-all duration-300`}
            onClick={() => setActiveTab("noteworthy")}
          >
            Other Projects
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "chosen" && (
          <>
            {/* Researchers Platform */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="relative w-full">
                {/* Larger image (example2.png) */}
                <img
                  src={PortfolioImages[1]}
                  alt="Researchers Platform Example 2"
                  className="w-full object-cover cursor-pointer hover:opacity-80 border-2 border-gray-100 rounded-lg"
                  onClick={() => openCarousel(PortfolioImages[1])}
                />
                {/* Smaller image (example1.png) */}
                <img
                  src={PortfolioImages[0]}
                  alt="Researchers Platform Example 1"
                  className="bg-gray-200 absolute -bottom-8 -right-4 w-1/3 h-auto object-cover border-2 border-gray-100 rounded-lg"
                  onClick={() => openCarousel(PortfolioImages[0])}
                />
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2 items-start">
                  <h3 className="text-2xl font-bold">MY PORTFOLIO</h3>
                  <a
                    href="#"
                    className="flex items-center text-[#6EFFE1] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.75em"
                      width="1.75em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400">
                  I developed this portfolio from scratch to showcase my
                  programming skills in React.js. It highlights my professional
                  experience, educational background, and projects. The
                  portfolio itself is a testament to my expertise in creating
                  dynamic, responsive web applications using React.js.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    ReactJs
                  </span>
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    TailwindCSS
                  </span>
                </div>
              </div>
            </div>

            {/* ERP System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="relative w-full">
                {/* Larger image (example2.png) */}
                <img
                  src={erpImages[1]}
                  alt="ERP Example 2"
                  className="w-full object-cover cursor-pointer hover:opacity-80 rounded-lg"
                  onClick={() => openCarousel(erpImages[1])}
                />
                {/* Smaller image (example1.png) */}
                <img
                  src={erpImages[0]}
                  alt="ERP Example 1"
                  className="bg-gray-200 absolute -bottom-8 -right-4 w-2/3 h-auto object-cover border-2 border-[#011d38] rounded-lg"
                  onClick={() => openCarousel(erpImages[0])}
                />
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2 items-start">
                  <h3 className="text-2xl font-bold">ERP SYSTEM</h3>
                  <a
                    href="#"
                    className="flex items-center text-[#6EFFE1] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.75em"
                      width="1.75em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400">
                  The ERP system is a comprehensive management tool that
                  integrates various business functions including sales, HR,
                  statistics, and product management. Designed to streamline
                  internal processes, it provides a unified solution for
                  managing and analyzing key business activities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    Django
                  </span>
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    SQL
                  </span>
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    AlpineJS
                  </span>
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    TailwindCSS
                  </span>
                </div>
              </div>
            </div>

            {/* CRM System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="relative w-full">
                {/* Larger image (example2.png) */}
                <img
                  src={crmImages[1]}
                  alt="CRM Example 2"
                  className="w-full object-cover cursor-pointer hover:opacity-80 rounded-lg"
                  onClick={() => openCarousel(crmImages[1])}
                />
                {/* Smaller image (example1.png) */}
                <img
                  src={crmImages[0]}
                  alt="CRM Example 1"
                  className="bg-gray-200 absolute -bottom-8 -right-4 w-2/3 h-auto object-cover border-2 border-[#011d38] rounded-lg"
                  onClick={() => openCarousel(crmImages[0])}
                />
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2 items-start">
                  <h3 className="text-2xl font-bold">CRM SYSTEM</h3>
                  <a
                    href="#"
                    className="flex items-center text-[#6EFFE1] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.75em"
                      width="1.75em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400">
                  A CRM app built with Django and Alpine.js to manage customer
                  interactions and automate marketing tasks, enhancing customer
                  relationship management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    Django
                  </span>
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    AlpineJS
                  </span>
                  <span className="bg-[#6effe2b0] text-black px-2 py-1 rounded-full text-xs sm:text-sm">
                    TailwindCSS
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "noteworthy" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
              {/* Rafikni Website */}
              <div className="shadow-2xl cursor-pointer  p-6 rounded-lg bg-[#062c50] [&_h4]:hover:text-[#6effe2e3] hover:-translate-y-4 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl text-left font-bold">
                    Rafikni Website
                  </h4>
                  <a
                    href="https://rafiknidz.com"
                    className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 mb-4 py-4">
                  A WordPress website developed for the Rafikni project,
                  providing an engaging and user-friendly platform.
                </p>
                <p className="text-xs font-bold text-gray-500">
                  WordPress, WOOCommerce, elementor
                </p>
              </div>

              <div className="shadow-2xl cursor-pointer  p-6 rounded-lg bg-[#062c50] [&_h4]:hover:text-[#6effe2e3] hover:-translate-y-4 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl text-left font-bold">
                    DML Engineering Website
                  </h4>
                  <a
                    href="https://afifaarg.github.io/dmlengineering"
                    className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 mb-4 py-4">
                  A responsive static animated website built using HTML, CSS,
                  and TailwindCSS for a corporate engineering company.
                </p>
                <p className="text-xs font-bold text-gray-500">
                  HTML, CSS, TailwindCSS, AlpineJS
                </p>
              </div>

              <div className="shadow-2xl cursor-pointer  p-6 rounded-lg bg-[#062c50] [&_h4]:hover:text-[#6effe2e3] hover:-translate-y-4 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl text-left font-bold">
                    Green Kitchen Website
                  </h4>
                  <a
                    href="https://afifaarg.github.io/greenkitchen"
                    className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 mb-4 py-4">
                  A responsive showcasing website built to promote to a fictif
                  eco-friendly restaurant in the context of web developpement
                  course for beginner.
                </p>
                <p className="text-xs font-bold text-gray-500">
                  HTML, CSS, TailwindCSS, JavaScript
                </p>
              </div>
              <div className="shadow-2xl cursor-pointer  p-6 rounded-lg bg-[#062c50] [&_h4]:hover:text-[#6effe2e3] hover:-translate-y-4 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl text-left font-bold">
                    Dribble Clone Website
                  </h4>
                  <a
                    href="https://afifaarg.github.io/dribble-cllone-website/"
                    className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      className="transition-all duration-300 group-hover:translate-x-2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 mb-4 py-4">
                  A clone of Dribbble, showcasing a range of creative designs
                  and portfolio items.
                </p>
                <p className="text-xs font-bold text-gray-500">
                  HTML, CSS, TailwindCSS, JavaScript
                </p>
              </div>
            </div>
          </div>
        )}

        {currentImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={currentImage}
                alt="Project Detail"
                className="max-w-full max-h-screen"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeCarousel}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
