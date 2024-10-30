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
      "https://www.telcoplus.org/wp-content/uploads/2024/09/2015-dodge-challenger-scaled.jpg",
    title: "2015 Dodge Challenger",
    engine: "2D coupe, SXT 3.6L V6",
    mileage: "121,133 miles",
    color: "Navy Blue",
    startingPrice: "$13,995",
    buyPrice: "$15,000",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2024/05/2014-F150.jpg",
    title: "2014 F-150 King Ranch 4WD",
    engine: "Crew cab, 5.0L V8",
    mileage: "135,500 miles",
    color: "Brown",
    startingPrice: "$16,995",
    buyPrice: "$19,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2024/05/2018-toyota-camry.jpg",
    title: "2018 Toyota Camry",
    engine: "4D LE 2.5L I4",
    mileage: "131,506 miles",
    color: "White",
    startingPrice: "$12,995",
    buyPrice: "$15,495",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2024/03/2016-corvette.jpg",
    title: "2016 Chevrolet Corevette Stingray",
    engine: "2LT, 2D Coupe, 6.2L V8",
    mileage: "43,195 miles",
    color: "Shark Gray Metallic",
    startingPrice: "$40,950",
    buyPrice: "House of Cars, Tyler",
  },

];