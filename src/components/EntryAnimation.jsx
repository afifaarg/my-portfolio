import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for typechecking in React, it's a library that helps to typecheck the props passed to components to ensure that they are the correct type.

export default function Entryanimation({ setShowHomePage }) {
  const [isScaleOut, setIsScaleOut] = useState(false);

  useEffect(() => {
    const scaleOutTimer = setTimeout(() => {
      // Avoid letting console logs in your code.
      setIsScaleOut(true); // Trigger the scale-out animation
    }, 5000); // Trigger scale-out after initial animations complete

    const endTimer = setTimeout(() => {
      setShowHomePage(true); // Setting showHomePage to true after 5s will end the animation and display the home page.
    }, 5500); // 0.5s after scale-out starts

    return () => {
      clearTimeout(scaleOutTimer);
      clearTimeout(endTimer);
    };
  }, [setShowHomePage]);

  return (
    <div className="text-center text-white flex flex-col justify-center items-center h-screen">
      {/*Remove the h1 saying welcome to the home page*/}
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1850 1850"
        style={{ enableBackground: "new 0 0 1850 1850" }}
        xmlSpace="preserve"
        className={`mx-auto ${isScaleOut ? "scale-out-center" : ""}`} // Corrected dynamic className syntax
      >
        <defs>
          <radialGradient
            id="SVGID_1_"
            cx="959.7601"
            cy="959.6046"
            r="586.6596"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: "#6EFFE1" }} />
            <stop offset="1" style={{ stopColor: "#1D9BB8" }} />
          </radialGradient>
        </defs>
        <style type="text/css">
          {`
            .st0 {
              fill: none; /* Start without fill */
              stroke: url(#SVGID_1_);
              stroke-width: 2;
              stroke-dasharray: 4000;  /* Adjusted to ensure full length of path */
              stroke-dashoffset: 4000;  /* Start hidden */
              animation: dash 3s 1s linear forwards,  /* 1s delay, 3s draw time */
                         fillOpacity 1s 4s forwards, /* Fill the path with opacity transition */
                         reverseDash 3s 6s forwards;  /* Retract the stroke after filling */
            }

            @keyframes dash {
              to {
                stroke-dashoffset: 0; /* Draw the entire path */
              }
            }

            @keyframes fillOpacity {
              from {
                fill: none; /* Start with no fill */
              }
              to {
                fill: url(#SVGID_1_); /* Transition to gradient fill */
              }
            }

            @keyframes reverseDash {
              from {
                stroke-dashoffset: 0; /* Start fully drawn */
              }
              to {
                stroke-dashoffset: 4000; /* Retract the entire stroke */
              }
            }

            /* Animation scale-out-center */
            @keyframes scale-out-center {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              100% {
                transform: scale(0);
                opacity: 1;
              }
            }
            .scale-out-center {
              animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
            }
          `}
        </style>
        <g>
          <path
            className="st0"
            d="M1584.3,1021.9c-185.9-105.4-384.7-218.2-570.5-323.6V573.6c223,126.5,457.4,259.4,680.4,386l-6.5,3.7
                    L1584.3,1021.9z M1474.4,1084.3l-109.9-62.3c-69.4,39.4-169,95.9-238.4,135.2V886.7c-15.1-8.6-99.2-56.2-112.3-63.7v522.6
                    C1158.1,1263.7,1330,1166.2,1474.4,1084.3z M231.8,955.9l-6.5,3.7c223,126.5,457.5,259.5,680.4,386v-124.7
                    C720,1115.5,521.1,1002.7,335.2,897.3L231.8,955.9z M445.1,834.9L555,897.3c69.4-39.4,169-95.9,238.4-135.2v270.5
                    c15.1,8.6,99.2,56.2,112.3,63.7V573.6C761.5,655.5,589.6,753,445.1,834.9z"
          />
        </g>
      </svg>
    </div>
  );
}

// Define the prop types for the Entryanimation component, setShowHomePage is a function that is required.

Entryanimation.propTypes = {
  setShowHomePage: PropTypes.func.isRequired,
};
