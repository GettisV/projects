import ALL_PRODUCTS from "./ImagesForProduct";

export const DataMen = [
  {
    srcImage: [...ALL_PRODUCTS.MProduct1.images],
    srcThumbnailImage: [...ALL_PRODUCTS.MProduct1.imagesThumbnail],
    company: "sneaker_company#1",
    description: `Slip into these extremely comfortable sneakers. Easy to slip in and
          out of and has a great fit! Our Comfort Foam technology will keep your
          feet comfy throughout your day!`,
    title: "Skechers Men's Energy Afterburn Lace-Up Sneaker",
    price: {
      dollars: "60",
      cents: "00",
    },

    //Для скидки
    oldPrice: {
      dollars: "70",
      cents: "00",
    },
  },
  {
    srcImage: [...ALL_PRODUCTS.MProduct2.images],
    srcThumbnailImage: [...ALL_PRODUCTS.MProduct2.imagesThumbnail],
    company: "ADIDAS",
    description: `If you want to impress, then you can start with a basketball court. That's where we found inspiration for these adidas Niteball sneakers. The energy of dynamic play is embodied in a bold layered silhouette. The soft Lightstrike outsole delivers comfort with every step. The model is made from recycled materials as part of our commitment to reduce plastic waste. 20% of the upper elements contain at least 50% recycled materials.`,
    title: "ADIDAS ORIGINALS NITEBALL SNEAKERS",
    price: {
      dollars: "50",
      cents: "20",
    },
  },
  {
    srcImage: [...ALL_PRODUCTS.MProduct3.images],
    srcThumbnailImage: [...ALL_PRODUCTS.MProduct3.imagesThumbnail],
    company: "ADIDAS",
    description: `It's time to leave the bench! Spectacular adidas Niteball 2.0 just won't let you stay in the shadows. An archival basketball silhouette reimagined with a modern twist for a bold and stylish look. But the main feature of these sneakers is the shock-absorbing sole, which effectively returns energy and makes every step comfortable.`,
    title: "ADIDAS ORIGINALS NITEBALL 2.0 SNEAKERS",
    price: {
      dollars: "92",
      cents: "40",
    },

    //Для скидки
    oldPrice: {
      dollars: "102",
      cents: "70",
    },
  },
];
