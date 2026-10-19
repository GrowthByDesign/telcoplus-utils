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
 //{  
 //   imgSrc:"https://www.telcoplus.org/app/uploads/2026/10/PXL_20261012_1931545452-scaled.jpg",
 //   title: "Nitro 2007 Bass Boat",
 //   engine: "4 cylinders, 1.6 liter, fwd, automatic 6 speed",
 //   mileage: "121,000 miles",
 //   color: "Silver",
 //   startingPrice: "$ 14,250"  }
 {  
    imgSrc:"https://www.telcoplus.org/app/uploads/2026/10/PXL_20261012_1931545452-scaled.jpg",    
    title: "Nitro 2007 Bass Boat",
    engine: "Model 901 CDX SC, Mercury motor Length 19\" Beam 8'0\" Weight 1715",
    mileage: " ",
    color: "black",
    startingPrice: "$14,250",
         buyPrice: "$14,250",
}

];