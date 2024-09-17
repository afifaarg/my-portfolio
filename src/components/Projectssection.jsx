import { useState } from "react";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(null);

  // Open the carousel with the clicked image
  const openCarousel = (image) => {
    setCurrentImage(image);
  };

  // Close the carousel
  const closeCarousel = () => {
    setCurrentImage(null);
  };

  const erpImages = [
    "/images/erp1.jpg",
    "/images/erp2.jpg",
    "/images/erp3.jpg",
  ];

  const crmImages = [
    "/images/crm1.jpg",
    "/images/crm2.jpg",
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center text-[#6EFFE1] mb-12">
        My Projects
      </h2>

      {/* ERP System Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left - Image Collection */}
        <div className="space-y-4">
          {erpImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`ERP Image ${index + 1}`}
              className="w-full cursor-pointer hover:opacity-80"
              onClick={() => openCarousel(image)}
            />
          ))}
        </div>

        {/* Right - Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">ERP System</h3>
          <p className="text-gray-400">
            This ERP system was built using Django, SQL, AlpineJS, and TailwindCSS. It helps streamline the enterprise's internal processes and offers a scalable solution.
          </p>
          <a
            href="https://github.com/your-github-repo"
            className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* CRM System Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left - Image Collection */}
        <div className="space-y-4">
          {crmImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`CRM Image ${index + 1}`}
              className="w-full cursor-pointer hover:opacity-80"
              onClick={() => openCarousel(image)}
            />
          ))}
        </div>

        {/* Right - Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">CRM App</h3>
          <p className="text-gray-400">
            A CRM app developed to manage customer interactions and automate marketing, built using Django and Alpine.js.
          </p>
          <a
            href="https://github.com/your-github-repo"
            className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* DML Engineering Website Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left - Image Collection */}
        <div className="space-y-4">
          <img
            src="/images/dml1.jpg"
            alt="DML Engineering"
            className="w-full cursor-pointer hover:opacity-80"
            onClick={() => openCarousel("/images/dml1.jpg")}
          />
        </div>

        {/* Right - Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">DML Engineering Website</h3>
          <p className="text-gray-400">
            A corporate website developed for DML Engineering using modern web technologies.
          </p>
          <a
            href="https://github.com/your-github-repo"
            className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Rafikni WordPress Website Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Image Collection */}
        <div className="space-y-4">
          <img
            src="/images/rafikni.jpg"
            alt="Rafikni Project"
            className="w-full cursor-pointer hover:opacity-80"
            onClick={() => openCarousel("/images/rafikni.jpg")}
          />
        </div>

        {/* Right - Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Rafikni WordPress Website</h3>
          <p className="text-gray-400">
            A WordPress website created for the Rafikni project, providing an informative and user-friendly platform.
          </p>
          <a
            href="https://github.com/your-github-repo"
            className="text-[#6EFFE1] underline hover:text-[#5dcfb5]"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Full-screen Carousel */}
      {currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeCarousel}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <img src={currentImage} alt="Full-screen" className="w-3/4 h-3/4 object-contain" />
        </div>
      )}
    </section>
  );
}
