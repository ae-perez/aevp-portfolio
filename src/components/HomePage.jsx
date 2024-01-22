//todo:

import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navigation from "./Navigation";
import D3Image from "../images/graph.png";
import BudgetImage from "../images/budget.png";
import DesignImage from "../images/illustration.png";
import MarioAnimationImage from "../images/animate.png";
import ScheduleUtilizationImage from "../images/project.png";
import AdvancedAnalyticsImage from "../images/analytics.png";
import RockPaperScissorsImage from "../images/rock-paper-scissors.png";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // todo: do you really need this? test after
  const [activeIndex, setActiveIndex] = useState(0);
  const translateValue = -(activeIndex * 100);
  const [hasScrolled, setHasScrolled] = useState(false);
  const colors = ["bg-aquamarine", "bg-melon", "bg-peach", "bg-blue"];

  const cardData = [
    {
      title: "Schedule Utilization",
      img: ScheduleUtilizationImage,
      summary:
        "The Schedule Utilization feature was ingeniously crafted for paid analytics users, aimed at enhancing their ability to efficiently monitor and analyze how their employees allocate time during a workday or week. This innovation primarily serves to facilitate more accurate forecasting of future staff availability.\n\n At the core of its functionality, the feature is intuitively integrated into the scheduling page. Users encounter a prominent Utilization button positioned strategically at the top right corner of the calendar. Upon interacting with this button, a modal springs to life, revealing an insightful Looker graph. This graph is not merely a visual treat but a functional marvel, clearly delineating the distribution of an employee's busy and available time slots across the selected time frame, be it a day or a week.\n\n The development journey of this feature was marked by extensive research, delving into the intricacies of integrating Looker API calls within embedded iframes. The team navigated the complexities of ensuring seamless functionality in conjunction with older blade files, all while meticulously addressing any potential formatting issues that might arise in LookML. This rigorous research and careful consideration in development underscore the team's commitment to delivering a feature that is not only technologically sound but also user-centric, significantly simplifying the task of schedule management for analytics users.",
      date: "May 2023",
      company: "Coconut Software",
      team: "Product Manager, UX Designer, Senior Developer, Junior Developer",
      technologies: "React, PHP, Laravel, JavaScript, LookML, Figma",
      url: "https://www.coconutsoftware.com/blog/appointment-tracking-software-banks-credit-unions/",
    },
    {
      title: "Advanced Analytics",
      img: AdvancedAnalyticsImage,
      summary:
        "The 'Advanced Analytics' feature, a premium offering from our software suite, is tailored for clients seeking a deeper, more comprehensive understanding of their data. This feature becomes accessible upon subscription, with a dedicated button appearing prominently on the main navigation bar.\n\n Engaging with this button transports users to a specialized page, seamlessly incorporating Google's BI tool within an iframe. This integration forms the core of the Advanced Analytics experience, offering users an array of pre-created dashboards, explores, and looks. These tools are meticulously designed to present a diverse range of statistics in a visually captivating and intuitive format, enabling users to glean valuable insights effortlessly.\n\n One of the standout aspects of this feature is its customization capability. Users are not limited to predefined data visualizations; they have the freedom to craft their own dashboards, explores, and looks. This personalization extends further, allowing users to save their custom creations for easy access from the main Advanced Analytics page. This level of user autonomy and flexibility underscores our commitment to providing a versatile and user-centric analytical tool.\n\n While delivering real-time analytics posed a challenge, our team ingeniously developed an algorithm that ensures data is updated with only a minimal delay, typically just a few minutes. This near real-time capability represents a significant stride in data accuracy and timeliness.\n\n Looking ahead, one of our ambitious goals is to evolve this feature to offer real-time analytics. This enhancement aims to mirror the dynamic nature of each bank's data, providing an even more immediate and accurate reflection of current metrics. The pursuit of this goal highlights our ongoing commitment to innovation and excellence in data analysis, continually seeking to elevate the user experience and provide cutting-edge solutions to our clients.",
      date: "November 2022",
      company: "Coconut Software",
      team: "Product Manager, UX Designer, Senior Developer, Intermediate Developer, Junior Developer",
      technologies: "React, PHP, Laravel, JavaScript, LookML, Figma",
      url: "https://www.coconutsoftware.com/blog/appointment-tracking-software-banks-credit-unions/",
    },
    {
      title: "Design System",
      img: DesignImage,
      summary:
        "By integrating an innovative 'Tab' component enriched Coconut Software's design system.It was a strategic enhancement designed to refine navigation efficiency within our core application. This addition was meticulously developed to target specific pages where user experience could be notably improved. The new 'Tab' component not only streamlines the navigation process but also elevates the overall user interface by introducing more intuitive interaction patterns. This enhancement plays a crucial role in simplifying users' access to essential information and functionalities, thereby reducing navigation time and enhancing user satisfaction. The thoughtful design and seamless integration of this component demonstrate our commitment to continually improving our product's usability and aesthetic appeal.",
      date: "June 2022",
      company: "Coconut Software",
      team: "Product Manager, UX Designer, Senior Developer, Junior Developer",
      technologies: "React, JavaScript, TypeScript, Figma",
      url: "https://www.coconutsoftware.com/blog/appointment-tracking-software-banks-credit-unions/",
    },
    {
      title: "Rock, Paper Scissors",
      img: RockPaperScissorsImage,
      summary:
        "Developed an engaging and visually captivating Rock Paper Scissors game, designed to provide a delightful and entertaining gameplay experience. This game combines intuitive mechanics with striking aesthetics for hours of enjoyable play.",
      date: "July 2021",
      company: "N/A",
      team: "Independent Contributor",
      technologies: "HTML, CSS, JavaScript",
      url: "https://rockpaperscissors-sage.vercel.app/",
    },
    {
      title: "D3 Graph",
      img: D3Image,
      summary:
        "Designed a sophisticated D3 graph using d3.js, offering a dynamic tool for calculating potential earnings and savings from funds, ETFs, and personal savings over several years. This graph provides an intuitive and visually engaging way to project financial growth and investment outcomes.",
      date: "November 2019",
      company: "N/A",
      team: "Independent Contributor",
      technologies: "HTML, D3.js",
      url: "https://firstd3graph.vercel.app/",
    },
    {
      title: "Mario Animations",
      img: MarioAnimationImage,
      summary:
        "Crafted a series of CSS animations to bring beloved Mario characters to life, enabling them to dash across your computer screen in a lively display. This creative project encapsulates the essence of these iconic figures, adding a playful and dynamic touch to your digital experience.",
      date: "September 2019",
      company: "N/A",
      team: "Independent Contributor",
      technologies: "HTML, CSS",
      url: "https://mariokartpage.perezalejandra.vercel.app/",
    },
    {
      title: "Budget App",
      img: BudgetImage,
      summary:
        "Developed a comprehensive budgeting app designed to help users efficiently manage their finances. This intuitive tool allows for the meticulous tracking of income and expenses, offering a clear and consolidated view of the user's monthly financial status. It simplifies financial planning, ensuring a better understanding and control of one's budget.",
      date: "August 2019",
      company: "N/A",
      team: "Independent Contributor",
      technologies: "HTML, CSS, JavaScript",
      url: "https://budgetapp-mdmfwlxnl.now.sh/",
    },
  ];

  // Effect hook for updating the hasScrolled state
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

  const handleModalToggle = () => {
    setIsBlurred(!isBlurred);
  };

  const handleCardClick = (card) => {
    setSelectedProject(card);
  };

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowContent(true);
        localStorage.setItem("hasVisited", "true");
      }, 2000); // 10 seconds for testing

      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  return (
    <div className="bg-almond cursor-grab">
      <Navigation />
      {isBlurred && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30"></div>
      )}
      {showContent ? (
        <main className={isBlurred ? "content blur-md" : "content"}>
          {/* todo: when opening the console, modal shrinks, look into fixing that */}
          <div>
            <div className="h-screen flex flex-col justify-center items-center">
              <h1 className="text-majorelleBlue-500 text-center text-8xl font-extrabold tracking-widest w-full">
                Hi, I'm Alé.
              </h1>
              <div className="text-center mt-2 font-extrabold text-9xl md:text-8xl [text-wrap:balance] bg-clip-text">
                <span className="text-majorelleBlue-500">A </span>
                <span className="text-majorelleBlue-500 inline-flex flex-col h-[calc(theme(fontSize.9xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block shadow-black animate-text-slide leading-tight [&_li]:block">
                    <li className="bg-blue px-2 rounded-full">Full Stack</li>
                    <li className="bg-aquamarine rounded-full">Front End</li>
                    <li className="bg-melon rounded-full">Back End</li>
                    <li className="bg-peach rounded-full text-center">
                      Software
                    </li>
                    <li
                      className="bg-blue px-4 rounded-full"
                      aria-hidden="true"
                    >
                      Full Stack
                    </li>
                  </ul>
                </span>{" "}
                <span className=" text-majorelleBlue-500">Developer.</span>
              </div>
              <p className="text-majorelleBlue-500 text-3xl my-3 text-brown">
                I'm passionate about crafting digital magic ✨.
              </p>
            </div>
            {!hasScrolled && (
              // absolute top-1/2 right-60 transform -translate-y-1/2 z-20
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
            <section>
              <div>
                <div className="text-majorelleBlue-500">
                  <h1 className="mb-4	text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-8xl">
                    Featured Work.
                  </h1>
                  <p className="mb-6 text-center text-lg font-light text-brown lg:text-2xl sm:px-16 xl:px-48 dark:brown">
                    A curated showcase of my expertise as a developer. It's a
                    glimpse into the breadth of my skills and creativity,
                    offering a preview of the innovative solutions and engaging
                    experiences I am capable of crafting.
                  </p>
                </div>
                {/* Carousel Component */}
                <div className="relative w-full rounded-lg">
                  <div
                    className="relative w-full h-[600px] overflow-hidden"
                    data-carousel="slide"
                  >
                    {cardData.map((card, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 bg-majorelleBlue-500 transition-transform duration-300 ease-in-out ${
                          index === activeIndex
                            ? "translate-x-0"
                            : index < activeIndex
                            ? "-translate-x-full"
                            : "translate-x-full"
                        }`}
                        style={{ zIndex: index === activeIndex ? "10" : "0" }}
                      >
                        <Card
                          card={card}
                          onCardClick={() => handleCardClick(card)}
                          onModalToggle={handleModalToggle}
                          colorClass={colors[index % colors.length]}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={prevItem}
                    className="absolute animate-bounce top-1/2 left-60 transform -translate-y-1/2 z-20"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                      <svg
                        className="w-32 h-32 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    onClick={nextItem}
                    className="absolute animate-bounce top-1/2 right-60 transform -translate-y-1/2 z-20"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                      <svg
                        className="w-32 h-32 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <div
          role="status"
          className="flex flex-row min-h-screen justify-center items-center"
        >
          <svg
            aria-hidden="true"
            className="w-48 h-48 text-gray-200 animate-spin dark:text-yellow-100 fill-yellow-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <footer className="bg-almond mt-4 w-full py-4 md:flex md:items-center md:justify-between flex-shrink-0 h-1/10">
        <div className="text-majorelleBlue-500 max-w-screen-lg mx-auto px-4">
          {/* Rest of the footer content */}
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium sm:mt-0">
            <li className="mr-4">
              <a href="https://github.com/ae-perez" target="_blank">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
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
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clipRule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/contact">
                <svg
                  className="w-6 h-6"
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

export default HomePage;
