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
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/06/IMG-3403-scaled.jpg",
    title: "2020 Nissan Altima",
    engine: "4D SR 2.5L I4",
    mileage: "97,519 miles in Longview",
    color: "White Exterior",
    startingPrice: "$15,995",
    buyPrice: "$19,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/06/IMG-3397-scaled.jpg",
    title: "2016 Mazda 3 Sedan",
    engine: "Grand Touring, 2.0L I4",
    mileage: "134,350 miles in Longview",
    color: "Gray Exterior",
    startingPrice: "$10,995",
    buyPrice: "$12,995",
  },
  {
    imgSrc: "https://www.telcoplus.org/wp-content/uploads/2023/06/IMG_4154.jpg",
    title: "2013 Ford F150 Crew Cab XLT",
    engine: "Eco Boost 3.5L Turbo",
    mileage: "135,000 miles in Tyler",
    color: "Blue Exterior",
    startingPrice: "$14,995",
    buyPrice: "$15,995",
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
];
