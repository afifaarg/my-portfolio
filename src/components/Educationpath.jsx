export default function Educationpath() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 w-3/4 mx-auto text-greyText" id="education">
      {/* Title */}
      <div className="flex items-center gap-4">
        <div className="h-px bg-gray-100 w-16 md:w-36"></div>
        <h1 className="text-[#6effe2dc] font-bold text-2xl sm:text-3xl">Education</h1>
        <div className="h-px bg-gray-100 w-16 md:w-36"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-[#6EFFE1] mt-8 space-y-8 sm:space-y-12">
        {/* Master's Degree */}
        <div className="ml-4 sm:ml-8 flex items-start sm:items-center">
          {/* SVG Icon */}
          <div className="absolute w-5 h-5 sm:w-6 sm:h-6 -left-3 sm:-left-4 transform translate-y-2">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="text-[#6EFFE1]"
              height="1.5em"
              width="1.5em"
            >
              <path d="M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z" />
              <path d="M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z" />
            </svg>
          </div>

          <div className="flex flex-col space-y-2 ml-8">
            <h3 className="text-base sm:text-lg font-bold text-greyText">
              Master's Degree in Software Engineering - University of Science and Technology Houari Boumedienne
            </h3>
            <p className="text-xs sm:text-sm text-[#B0BEC5]">
              <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Acquired advanced skills in{" "}
              <span className="italic font-bold text-[#6effe285]">software development</span>, system design, and architecture.
            </p>
            <p className="text-xs sm:text-sm text-[#B0BEC5]">
              <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Specialized in{" "}
              <span className="italic font-bold text-[#6effe285]">database management</span> and backend development techniques.
            </p>
            <p className="text-xs sm:text-sm text-[#6EFFE1] font-bold">Sept 2021 - June 2023</p>
          </div>
        </div>

        {/* Bachelor's Degree */}
        <div className="ml-4 sm:ml-8 flex items-start sm:items-center">
          {/* SVG Icon */}
          <div className="absolute w-5 h-5 sm:w-6 sm:h-6 -left-3 sm:-left-4 transform translate-y-2">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="text-[#6EFFE1]"
              height="1.5em"
              width="1.5em"
            >
              <path d="M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z" />
              <path d="M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z" />
            </svg>
          </div>

          <div className="flex flex-col space-y-2 ml-8">
            <h3 className="text-base sm:text-lg font-bold text-greyText">
              Bachelor's Degree in Computer Science - University of Science and Technology Houari Boumedienne
            </h3>
            <p className="text-xs sm:text-sm text-[#B0BEC5]">
              <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Gained a strong foundation in{" "}
              <span className="italic font-bold text-[#6effe285]">programming languages</span> and algorithms.
            </p>
            <p className="text-xs sm:text-sm text-[#B0BEC5]">
              <span className="pr-2 font-bold text-[#6EFFE1]">-</span> Developed proficiency in{" "}
              <span className="italic font-bold text-[#6effe285]">software engineering methodologies</span> and tools.
            </p>
            <p className="text-xs sm:text-sm text-[#6EFFE1] font-bold">Sept 2018 - June 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
