export default function AboutMe() {
  return (
    <div className="h-screen flex items-center justify-center text-greyText" id="aboutMe">
      <div className="flex flex-col items-center text-greyText p-4 w-3/4 mx-auto">
        {/* Title Section */}
        <div className="flex items-center gap-4">
          <div className="h-px bg-gray-100 w-36"></div>
          <h1 className="text-[#6effe2dc] font-bold text-3xl">About Me</h1>
          <div className="h-px bg-gray-100 w-36"></div>
        </div>

        {/* Content Section */}
        <div className="text-left space-y-6 p-4">
          <h1 className="text-lg font-bold">Hi, I’m Afifa Argoub</h1>

          {/* Introduction Paragraphs */}
          <div className="space-y-3 text-[#B0BEC5]">
            <p className="text-lg">
              <span className="pr-2 font-bold text-[#6EFFE1]">></span>
              I graduated from the <span className="italic text-[#6EFFE1]">University of Science and Technology Houari Boumedienne</span> with a <span className="italic text-[#6EFFE1]">Master's degree</span> in <span className="italic text-[#6EFFE1]">Software Engineering</span>.
            </p>
            <p className="text-lg">
              <span className="pr-2 font-bold text-[#6EFFE1]">></span>
              I worked for <span className="italic text-[#6EFFE1]">1.5 years</span> as a <span className="italic text-[#6EFFE1]">Full Stack Developer</span> in a company, where I gained valuable experience in <span className="italic text-[#6EFFE1]">teamwork</span> and collaboration with different departments.
            </p>
            <p className="text-lg">
              <span className="pr-2 font-bold text-[#6EFFE1]">></span>
              As a <span className="italic text-[#6EFFE1]">freelance developer</span>, I created various side projects that further expanded my knowledge and skills.
            </p>
            <p className="text-lg">
              <span className="pr-2 font-bold text-[#6EFFE1]">></span>
              Recently, I created a comprehensive <span className="italic text-[#6EFFE1]">web development course</span> for <span className="italic text-[#6EFFE1]">beginners</span>, helping them get started with HTML, CSS, JavaScript and responsive design.
            </p>
          </div>

          {/* Technologies Section */}
          <p className="text-lg text-[#B0BEC5]">
            <span className="pr-2 font-bold text-[#6EFFE1]">></span>
            Technologies I work with:
          </p>
          <div className="grid grid-cols-2 gap-4 px-8 text-[#B0BEC5]">
            <ul className="list-disc list-inside space-y-1 text-[#6EFFE1]">
              <li><span className="italic">Django</span></li>
              <li><span className="italic">TailwindCSS</span></li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-[#6EFFE1]">
              <li><span className="italic">ReactJS</span></li>
              <li><span className="italic">WordPress</span></li>
              <li><span className="italic">AlpineJS</span></li>
            </ul>
          </div>

          {/* Final Message */}
          <div className="border-l-4 pl-2 mt-4 border-[#6EFFE1] text-[#B0BEC5]">
            <p>
              I'm continuously learning and evolving to stay on the cutting edge of <span className="italic text-[#6EFFE1]">web development technologies</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
