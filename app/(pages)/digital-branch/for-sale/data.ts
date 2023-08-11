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
      "https://www.telcoplus.org/wp-content/uploads/2023/08/chevy-14.jpg",
    title: "2014 Chevy 1500",
    engine: "Crew Cab LT 5.3L V8",
    mileage: "131,923 Miles in Tyler",
    color: "White Exterior",
    startingPrice: "$15,995",
    buyPrice: "$18,995",
  },
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
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/05/2015-chevy.jpg",
    title: "2015 Chevy Silverado 1500",
    engine: "Extended Cab LT 5.3L V8",
    mileage: "143,477 miles; in Longview",
    color: "Blue Exterior",
    startingPrice: "$15,995",
    buyPrice: "$17,995",
  },
  {
    imgSrc: "https://www.telcoplus.org/wp-content/uploads/2023/06/tahoe.jpg",
    title: "2013 Chevy Tahoe",
    engine: "4D 5.3L V8",
    mileage: "192,986 miles in Longview",
    color: "Silver Exterior",
    startingPrice: "$12,995",
    buyPrice: "$15,250",
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
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/07/chevy-sub-14.jpg",
    title: "2014 Chevy Suburban",
    engine: "",
    mileage: "155,263 miles in Longview",
    color: "Silver",
    startingPrice: "$11,995",
    buyPrice: "$13,995",
  },
];
