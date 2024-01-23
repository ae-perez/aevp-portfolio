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
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-50 overflow-y-auto bg-white rounded-lg w-1/2 h-5/6">
      {/* Modal content */}
      <div className="relative rounded-lg shadow">
        {/* <!-- Modal header --> */}
        <div className="sticky top-0 flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-majorelleBlue-500">
          <h1 className="text-5xl font-extrabold text-gray">{card.title}</h1>
          <button
            className="flex items-center justify-center w-10 h-10 bg-jasmine-700 text-majorelleBlue-500 rounded-full shadow-md shadow-majorelleBlue-100/50"
            onClick={toggleModal}
            // Close button properties
          >
            <svg
              className="w-3 h-3"
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
          {/* <!-- link --> */}
          <div className="flex items-center justify-center rounded-b">
            <a
              href={card.url}
              target="_blank"
              class="text-majorelleBlue-500 bg-jasmine-700 font-bold rounded-full text-sm px-4 py-2.5 shadow-lg shadow-majorelleBlue-500/50"
              // style={{ boxShadow: "2px 2px #000000" }}
            >
              View demo
            </a>
          </div>

          {/* this is the date company collab etc */}
          <div className="mt-6">
            <dl className="">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt
                  className="text-sm font-bold leading-6 bg-aquamarine rounded-full w-40 px-4 py-2.5 text-center"
                  style={{ boxShadow: "2px 2px #000000" }}
                >
                  Technolgies Used:
                </dt>
                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                  {card.technologies}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt
                  className="text-sm font-bold leading-6 bg-peach rounded-full w-24 px-4 py-2.5 text-center"
                  style={{ boxShadow: "2px 2px #000000" }}
                >
                  Company:
                </dt>
                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                  {card.company}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt
                  className="text-sm font-bold leading-6 bg-blue rounded-full w-32 px-4 py-2.5 text-center"
                  style={{ boxShadow: "2px 2px #000000" }}
                >
                  Collaborators:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
                  {card.team}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt
                  className="text-sm font-bold leading-6 bg-melon rounded-full w-16 px-4 py-2.5 text-center"
                  style={{ boxShadow: "2px 2px #000000" }}
                >
                  Date:
                </dt>
                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                  {card.date}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="px-4 sm:px-0">
              <h3
                className="text-base font-bold leading-7 bg-aquamarine rounded-full w-40 text-center py-2 mb-2"
                style={{ boxShadow: "2px 2px #000000" }}
              >
                Project Overview
              </h3>
              <p>{formatSummaryWithLineBreaks(card.summary)}</p>
            </div>
          </div>
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
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-full shadow-majorelleBlue-500/50 hover:rounded-full hover:bg-majorelleBlue-500 hover:text-jasmine-700"
        type="button"
      >
        Read more
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
