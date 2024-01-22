import React from "react";
import CardImg from "../images/joshua-aragon-BMnhuwFYr7w-unsplash.jpg";
import ReadMore from "./ReadMore";

const Card = ({ onModalToggle, onCardClick, card, colorClass }) => {
  const imageSrc = card.img || CardImg;

  return (
    <div
      onClick={onCardClick}
      style={{ boxShadow: "15px 12px #000000" }}
      className={`mx-auto my-10 max-w-screen-lg rounded-full ${colorClass} flex flex-row items-center`}
    >
      <img className="rounded-full" src={imageSrc} alt="" />

      <div className="p-5 flex flex-col justify-center">
        {/* Added flex-col and justify-center for vertical alignment */}
        <h5 className="text-majorelleBlue-700 mb-2 text-5xl font-bold tracking-tight">
          {card.title}
        </h5>
        <div className="grid bg-jasmine-700 text-majorelleBlue-500 rounded-full shadow-lg shadow-majorelleBlue-500/50 w-32 h-12 my-4 text-center content-center">
          <ReadMore onModalToggle={onModalToggle} card={card} />
        </div>
      </div>
    </div>
  );
};

export default Card;
