// src/components/AboutPage.jsx
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ProfilePicture from "../images/1566525314066.jpeg"; // Adjust the path as necessary
import Experience from "./Experience";

const AboutPage = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    console.log(hasScrolled);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen cursor-grab">
      <div className="flex-grow mb-10">
        <Navigation />

        <div className="flex">
          <div className="flex flex-col justify-center items-center w-1/2 sticky top-0 h-screen p-4">
            <img
              className="rounded-full w-96 h-96 filter brightness-125"
              src={ProfilePicture}
              alt="Alejandra Perez's Profile Picture"
            />

            {!hasScrolled && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-96 z-20">
                <span>
                  <svg
                    className="animate-bounce w-32 h-32 text-majorelleBlue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            )}
          </div>
          <div className="overflow w-1/2">
            <section className="min-h-screen flex flex-col justify-center items-center w-5/6 p-4">
              <h1 className="text-majorelleBlue-500 mb-8 text-3xl text-right	font-extrabold leading-relaxed md:text-5xl lg:text-6xl">
                Hello there! I'm{" "}
                <span className="bg-peach rounded-full py-1 px-4 mb-2 inline-flex items-center justify-center">
                  Alé
                </span>
                , a{" "}
                <span className="bg-melon rounded-full py-2 px-4 mr-4 mb-2 inline-flex items-center justify-center">
                  full-stack{" "}
                </span>
                <span className="bg-aquamarine rounded-full py-2 px-4 mb-2 inline-flex items-center justify-center">
                  developer{" "}
                </span>{" "}
                by day and a{" "}
                <span className="bg-blue rounded-full py-2 px-4 inline-flex items-center justify-center">
                  creative{" "}
                </span>{" "}
                owl by night.
              </h1>

              <p className="text-justify text-lg font-normal text-majorelleBlue-500 lg:text-xl">
                In the digital realm, I weave code like a wizard, turning
                complex problems into elegantly simple solutions. My keyboard is
                my wand, and with each keystroke, I bring functionality and
                efficiency to life. But wait, there's more to me than just 1s
                and 0s! When I'm not busy debugging or deploying, you can find
                me exploring the wild frontiers of creativity. Whether it's
                creating a new spotify playlist, writing in my journal about my
                future aspirations, or doodling in my sketchbook, I believe in
                adding a splash of color to everything I do.
              </p>
              <br></br>
              <p className="text-justify text-lg font-normal text-majorelleBlue-500 lg:text-xl">
                My journey through the tech landscape is fueled by endless
                curiosity and a hearty appetite for learning. From the
                nitty-gritty of back-end development to the finesse of front-end
                design, I love all things tech. But it's not just about the
                code; it's about the stories we can tell and the experiences we
                can create through technology.
              </p>
              <br></br>
              <p className="text-justify text-lg font-normal text-majorelleBlue-500 lg:text-xl">
                So, if you're looking for someone who can code with precision
                and brainstorm with imagination, you're in the right place.
                Let's blend logic with creativity and see where this adventure
                takes us!
              </p>
            </section>

            <section className="min-h-screen w-5/6">
              <h1 className="text-majorelleBlue-500 text-right mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
                Work Experience.
              </h1>
              <p className="text-justify text-lg font-normal text-majorelleBlue-500 lg:text-xl">
                A curated showcase of my expertise as a developer. It's a
                glimpse into the breadth of my skills and creativity, offering a
                preview of the innovative solutions and engaging experiences I
                am capable of crafting.
              </p>
              <Experience />
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-almond mt-4 w-full py-4 md:flex md:items-center md:justify-between flex-shrink-0 h-1/10">
        <div className="text-majorelleBlue-500 max-w-screen-lg mx-auto px-4">
          {/* Rest of the footer content */}
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium sm:mt-0">
            <li className="mr-4">
              <a href="https://github.com/ae-perez" target="_blank">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/alejandraelizabeth/"
                target="_blank"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/contact">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </a>
            </li>
          </ul>
          <span className="text-sm sm:text-center">
            © 2024 Alejandra Perez. Made with ♥️.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
