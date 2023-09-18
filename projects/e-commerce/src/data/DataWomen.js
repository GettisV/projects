import ALL_PRODUCTS from "./ImagesForProduct";

export const DataWomen = [
  {
    srcImage: [...ALL_PRODUCTS.WProduct1.images],
    srcThumbnailImage: [...ALL_PRODUCTS.WProduct1.imagesThumbnail],
    company: "Nike",
    description:
      "Designed for everyday use, the Nike Air Max 90 retains elements of the original running shoe from the '90s. A Max Air unit provides cushioning with every step, while a solid rubber outsole with a waffle pattern enhances traction. Designed specifically for the Chinese New Year.",
    title: "NIKE AIR MAX WOMEN'S SNEAKERS 90 CNY",
    price: {
      dollars: "133",
      cents: "36",
    },

    //Для скидки
    oldPrice: {
      dollars: "180",
      cents: "20",
    },
  },
  {
    srcImage: [...ALL_PRODUCTS.WProduct2.images],
    srcThumbnailImage: [...ALL_PRODUCTS.WProduct2.imagesThumbnail],
    company: "NIKE",
    description: `Genuine suede with a contrasting white swoosh and heel counter is the new colorway for the Blazer Mid '77 Suede for ladies. A classic, straight mid-cut silhouette with straight lacing, a raw-edge foam-lined textile tongue and an embroidered Nike logo on the heel.
The Blazer Mid is a classic from Nike, introduced in 1972 as a basketball shoe. Later, in the 1980s, this model became popular among skateboarders, as the model had a high, supportive silhouette and a quality outsole. Fans of outdoor activities also liked Blazer Mid. Now this model is firmly entrenched in the lifestyle, and every year more and more different colors and variations come out.`,
    title: "NIKE BLAZER MID 77' SUEDE WOMEN'S SNEAKERS",
    price: {
      dollars: "180",
      cents: "35",
    },
  },
  {
    srcImage: [...ALL_PRODUCTS.WProduct3.images],
    srcThumbnailImage: [...ALL_PRODUCTS.WProduct3.imagesThumbnail],
    company: "NIKE",
    description: `First released in 1979, the Nike Daybreak is a blast from the past. A waffle-patterned rubber outsole and nylon upper add a vintage feel.`,
    title: "NIKE W DAYBREAK WOMEN'S SNEAKERS",
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
