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
    imgSrc:"https://www.telcoplus.org/wp-content/uploads/2026/04/IMG_4228-scaled.jpeg",
    title: "Kia Soul – Located in Gilmer , max seating 5, adult owner, garage kept, clean, Bluetooth, well maintained,  Call (903) 235-5009 or (903) 790-0201",
    engine: "4 cylinders, 1.6 liter, fwd, automatic 6 speed",
    mileage: "121,000 miles",
    color: "Silver",
    startingPrice: "$8,000"  },

    {  
    imgSrc:"https://www.telcoplus.org/wp-content/uploads/2026/04/1000027090-scaled.jpg",
    title: "2007 Motor Coach – Georgetown by Forest River - At the 1010 S SE Loop Branch",
    mileage: "29,750 miles",
    color: "white",
    startingPrice: "$8,000"  }


];