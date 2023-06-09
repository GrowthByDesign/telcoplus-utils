import React from "react";
import Card from "./Card";
import { Repo, repos } from "./data";

const CardDeck = () => {
  return (
    <div className="[card-deck] tw-grid xl:tw-grid-cols-2 xxl:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-12">
      {repos.map((repo: Repo) => (
        <Card
          key={repo.title}
          imgSrc={repo.imgSrc}
          imgAlt={repo.imgAlt}
          title={repo.title}
          engine={repo.engine}
          mileage={repo.mileage}
          color={repo.color}
          startingPrice={repo.startingPrice}
          buyPrice={repo.buyPrice}
        />
      ))}
    </div>
  );
};

export default CardDeck;
