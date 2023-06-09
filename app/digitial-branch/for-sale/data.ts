export type Repo = {
  imgSrc?: string;
  imgAlt?: string;
  shadowDirection?: string;
  title?: string;
  engine?: string;
  mileage?: string;
  color?: string;
  startingPrice?: string;
  buyPrice?: string;
};

export const repos: Repo[] = [
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/05/2014-ford.jpg",
    title: "2014 Ford F-150 King Ranch",
    engine: "Crew Cab, 4WD 5.0L V8",
    mileage: "135,173 miles in Longview",
    color: "White Exterior",
    startingPrice: "$16,995",
    buyPrice: "$21,995",
  },
  {
    imgSrc: "https://www.telcoplus.org/wp-content/uploads/2023/05/2007-cad.jpg",
    title: "2007 Cadillac DTS Sedan",
    engine: "4.6L 8V",
    mileage: "124,543 miles; in Longview",
    color: "White Exterior",
    startingPrice: "$2,995",
    buyPrice: "$4,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/05/2015-chevy.jpg",
    title: "2015 Chevy Silverado 1500",
    engine: "Extended Cab LT 5.3L V8",
    mileage: "143,477 miles; in Longview",
    color: "Blue Exterior",
    startingPrice: "$15,995",
    buyPrice: "$17,995",
  },
];
