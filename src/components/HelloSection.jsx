export default function HelloSection() {
  //Nice work with the handleScroll function. i like how smooth it scrolls.
  const handleScroll = () => {
    const nextSection = document.getElementById("aboutMe");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex py-4 justify-center">
      <div className="w-3/4">
        <main className="px-4">
          <div className="text-left">
            <p className="font-bold text-sm text-gray-500">Hello, my name is</p>
            <br />
            <h2 className="pb-3 text-4xl tracking-tight leading-10 font-extrabold text-[#6EFFE1] sm:text-5xl sm:leading-none md:text-8xl">
              Afifa Argoub.
            </h2>
            <h3 className="pb-4 text-2xl tracking-tight leading-10 font-extrabold text-[#ecf1f0] sm:text-3xl sm:leading-none md:text-6xl">
              I bring life to your ideas.
            </h3>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              a software engineer specializing in web development. Currently
              freelancing, I focus on creating accessible and engaging digital
              experiences. My work combines advanced technical skills with a
              keen eye for design to deliver exceptional web solutions.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <button
                onClick={handleScroll}
                className="flex items-center justify-center p-2 mt-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-10 h-10 animate-bounce"
                  fill="none"
                  stroke="#6EFFE1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
