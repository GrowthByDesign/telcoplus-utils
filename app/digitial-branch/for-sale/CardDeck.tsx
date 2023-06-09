import React from "react";
import Card from "./card/Card";
import { Repo, repos } from "./data";

const CardDeck = () => {
  const carCards = repos.map((repo: Repo, idx) => {
    const shadowDirection = ["left", "middle", "right"][idx % 3];

    return (
      <Card
        key={idx}
        shadowDirection={shadowDirection}
        imgSrc={repo.imgSrc}
        imgAlt={repo.imgAlt}
        title={repo.title}
        engine={repo.engine}
        mileage={repo.mileage}
        color={repo.color}
        startingPrice={repo.startingPrice}
        buyPrice={repo.buyPrice}
      />
    );
  });

  return (
    <div className="[card-deck] tw-grid xl:tw-grid-cols-2 xxl:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-12">
      {carCards}
    </div>
  );
};

export default CardDeck;
