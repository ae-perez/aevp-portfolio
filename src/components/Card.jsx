import React from "react";

const Card = (props) => {
  const { title, content } = props;

  return (
    <div className="card bg-black h-96 rounded-3xl m-10">
      {/* <img src={imageUrl} alt={title} className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
