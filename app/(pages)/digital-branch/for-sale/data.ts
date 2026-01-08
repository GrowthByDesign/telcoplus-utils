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

export type Others = {
  imgSrc?: string;
  title?: string;
  startingPrice?: string;


}

export const other: Others[] =[
    {  
    imgSrc:"https://www.telcoplus.org/wp-content/uploads/2025/08/20250804_111545-scaled.jpg",
    title: "Solid Wood Desks (3) - Longview Branch, Ask for Crystal $500 or best offer",
    startingPrice: "$500",
   
  },
       {  
    imgSrc:"https://www.telcoplus.org/wp-content/uploads/2025/08/20250725_101645.jpg",
    title: "Solid Wood Desks (3) - Longview Branch, Ask for Crystal $500 or best offer",
    startingPrice: "$500",
       buyPrice: "",

  },
]

export const repos: Repo[] = [


    {  
    imgSrc:"https://www.telcoplus.org/wp-content/uploads/2025/07/IMG_3508.jpg",
    title: "2017 Ram 1500 Laramie 4WD - Longview",
    engine: "6.7 v8",
    mileage: "136,631 miles",
    color: "white",
    startingPrice: "$18,000",
    buyPrice: "$21,995",
  },
  {
    imgSrc:
      "https://www.telcoplus.org/wp-content/uploads/2025/06/IMG_2921.jpg",
    title: "2020 Kia Sportage - Longview",
    engine: "2.4L ID",
    mileage: "59,787 miles",
    color: "Black",
    startingPrice: "$13,500",
    buyPrice: "$18,500",
  },


];