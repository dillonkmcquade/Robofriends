import React from "react";

const Card = ({ name, email, id, phone }) => {
  return (
    <div className="tc blue bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?100x100`} alt="robotImg" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default Card;
