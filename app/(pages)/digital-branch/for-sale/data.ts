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
      "https://www.telcoplus.org/wp-content/uploads/2023/10/2018-gmc-sierra.jpg",
    title: "2018 GMC Sierra 1500 Crew Cab",
    engine: "4WD 5.3L V8 SLT",
    mileage: "167,413 miles in Longview",
    color: "Dark Green Exterior",
    startingPrice: "$22,995",
    buyPrice: "$25,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/05/2014-ford.jpg",
    title: "2014 Ford F-150 King Ranch",
    engine: "Crew Cab, 4WD 5.0L V8",
    mileage: "135,173 miles in Longview",
    color: "Black and Tan Exterior",
    startingPrice: "$16,995",
    buyPrice: "$21,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/06/2018-f-150-edit.jpg",
    title: "2018 F150 4WD",
    engine: "Eco Boost, 4WD 2.7L V6 Turbo",
    mileage: "160,452 miles in Longview",
    color: "White Exterior",
    startingPrice: "$21,995",
    buyPrice: "$25,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/07/chevy-1500.jpg",
    title: "2014 Chevy 1500",
    engine: "4WD 5.3L V8",
    mileage: "129,101 miles in Longview",
    color: "Black",
    startingPrice: "$15,995",
    buyPrice: "$17,995",
  },
];