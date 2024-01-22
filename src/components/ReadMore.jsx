import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const ReadMore = ({ onModalToggle, card }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    onModalToggle(); // Toggle blur effect on HomePage
  };

  const formatSummaryWithLineBreaks = (summary) => {
    return summary.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const modalContent = (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-50 overflow-y-auto bg-white rounded-lg w-2/5">
      {/* Modal content */}
      <div className="relative rounded-lg shadow">
        {/* <!-- Modal header --> */}
        <div className="sticky top-0 flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-majorelleBlue-500">
          <h1 className="text-5xl font-extrabold text-gray">{card.title}</h1>
          <button
            className="flex items-center justify-center w-10 h-10 bg-melon rounded-full"
            onClick={toggleModal}
            // Close button properties
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* <!-- Modal body --> */}
        <div className="p-4 md:p-5 space-y-4 text-majorelleBlue-500">
          <div>
            <div className="px-4 sm:px-0">
              <h3
                className="text-base font-bold leading-7 bg-aquamarine rounded-full w-40 text-center p-2 mb-2"
                style={{ boxShadow: "2px 2px #000000" }}
              >
                Project Overview
              </h3>
              <p>{formatSummaryWithLineBreaks(card.summary)}</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt
                    className="text-sm font-bold leading-6 bg-melon rounded-full w-12 text-center"
                    style={{ boxShadow: "2px 2px #000000" }}
                  >
                    Date
                  </dt>
                  <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                    {card.date}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt
                    className="text-sm font-bold leading-6 bg-peach rounded-full w-20 text-center"
                    style={{ boxShadow: "2px 2px #000000" }}
                  >
                    Company
                  </dt>
                  <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                    Coconut Software
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt
                    className="text-sm font-bold leading-6 bg-blue rounded-full h-6 w-16 text-center"
                    style={{ boxShadow: "2px 2px #000000" }}
                  >
                    Team
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
                    {card.team}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt
                    className="text-sm font-bold leading-6 bg-aquamarine rounded-full w-36 text-center"
                    style={{ boxShadow: "2px 2px #000000" }}
                  >
                    Technolgies Used
                  </dt>
                  <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                    {card.technologies}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer --> */}
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <a
            href={card.url}
            target="_blank"
            class="text-majorelleBlue-500 bg-jasmine-700 font-medium rounded-full text-sm px-5 py-2.5"
          >
            Check me out here!
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={toggleModal}
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg shadow-majorelleBlue-500/50"
        type="button"
      >
        Read More
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>

      {/* <!-- Main modal --> */}
      {isModalOpen && (
        <div
          id="default-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            {isModalOpen &&
              ReactDOM.createPortal(
                modalContent,
                document.getElementById("modal-root")
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
