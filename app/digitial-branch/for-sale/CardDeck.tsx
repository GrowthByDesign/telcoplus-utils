import React from "react";
import Card from "./Card";

const CardDeck = () => {
  return (
    <div className="[card-deck] tw-grid xl:tw-grid-cols-2 xxl:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-12">
      <Card />
      <div>1</div>
      <div>1</div>
    </div>
  );
};

export default CardDeck;
