export type Repo = {
  imgSrc?: string;
  imgAlt?: string;
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
    imgAlt: "Image 1",
    title: "Title 1",
    engine: "Engine 1",
    mileage: "Mileage 1",
    color: "Coasd 1",
    startingPrice: "Starting Price 1",
    buyPrice: "Buy Price 1",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2023/05/2014-ford.jpg",
    imgAlt: "Image 1",
    title: "asdasd 1",
    engine: "Engine 1",
    mileage: "asd",
    color: "Color 1",
    startingPrice: "Starting Price 1",
    buyPrice: "Buy asd 1",
  },
];
