export default function Experiencetimeline() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 w-3/4 mx-auto text-greyText"
      id="experience"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="h-px bg-gray-100 w-24 sm:w-36"></div>
        <h1 className="text-[#6effe2dc] font-bold text-3xl sm:text-4xl">
          Experience
        </h1>
        <div className="h-px bg-gray-100 w-24 sm:w-36"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-[#6EFFE1] mt-8 max-w-4xl w-full">
        <div className="space-y-10">
          {/* Internship - Cerist */}
          <div className="relative pl-6 sm:pl-8">
            <div className="absolute w-5 h-5 bg-[#6EFFE1] rounded-full -left-2"></div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-greyText">
                Internship - Cerist, Ben Aknoun - Algiers
              </h3>
              <p className="text-base sm:text-lg italic text-[#B0BEC5]">
                Part of a graduate project:{" "}
                <span className="text-base sm:text-lg text-[#B0BEC5]">
                  Jan 2023 - June 2023
                </span>
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span>{" "}
                <span className="italic font-bold text-[#6effe285]">
                  Developed
                </span>{" "}
                and maintained backend functionalities, ensuring robust
                server-side operations.
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Learned
                and applied{" "}
                <span className="italic font-bold text-[#6effe285]">
                  software modeling techniques
                </span>{" "}
                to design system architecture.
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Applied{" "}
                <span className="italic font-bold text-[#6effe285]">
                  database schema
                </span>{" "}
                management and manipulated connections between frontend and
                backend systems.
              </p>
            </div>
          </div>

          {/* Full Stack Web Developer - DIVATECH */}
          <div className="relative pl-6 sm:pl-8">
            <div className="absolute w-5 h-5 bg-[#6EFFE1] rounded-full -left-2"></div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-greyText">
                Full Stack Web Developer - DIVATECH, Mohamadia - Algiers
              </h3>
              <p className="text-base sm:text-lg italic text-[#B0BEC5]">
                May 2023 - August 2024
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span>{" "}
                <span className="italic font-bold text-[#6effe285]">
                  Designed
                </span>{" "}
                and developed a tailored ERP system integrating inventory
                management, accounting, and project management.
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Built a
                custom CRM application for{" "}
                <span className="italic font-bold text-[#6effe285]">
                  improved engagement
                </span>{" "}
                and data analysis.
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span>{" "}
                Implemented{" "}
                <span className="italic font-bold text-[#6effe285]">
                  full-stack solutions
                </span>{" "}
                using HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.
              </p>
              <p className="text-sm sm:text-base text-[#B0BEC5]">
                <span className="pr-2 font-bold text-[#6EFFE1]">-</span>{" "}
                Demonstrated{" "}
                <span className="italic font-bold text-[#6effe285]">
                  problem-solving skills
                </span>{" "}
                by delivering high-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
