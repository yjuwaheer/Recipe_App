export const primaryColor = "#FAC46A";
export const lightPrimaryColor = "#FAF7F1";
export const whiteColor = "#FFFFFF";
export const blackColor = "#000000";
export const lightGrayColor = "#F5F5F5";
export const darkerGrayColor = "#8B8B8B";
export const lightPinkColor = "#F3E2E2";

// API constants
export const apiUrl = "https://api.edamam.com/api/recipes/v2?type=public";
export const dishTypeArray = [
  {
    dishType: "Soup",
    query: "Soup",
    color: "#0D4770",
    image: require("../assets/images/soup.png"),
  },
  {
    dishType: "Starter",
    query: "Starter",
    color: "#A30048",
    image: require("../assets/images/starter.png"),
  },
  {
    dishType: "Main course",
    query: "Main",
    color: "#9F7BC5",
    image: require("../assets/images/main.png"),
  },
  // {
  //   dishType: "Side dish",
  //   query: "Side",
  //   color: "#720F6B",
  //   image: require("../assets/images/side.png"),
  // },
  {
    dishType: "Biscuits and cookies",
    query: "Biscuits",
    color: "#AA6E02",
    image: require("../assets/images/biscuit.png"),
  },
  {
    dishType: "Bread",
    query: "Bread",
    color: "#562B01",
    image: require("../assets/images/bread.png"),
  },
  {
    dishType: "Cereals",
    query: "Cereals",
    color: "#D5C702",
    image: require("../assets/images/cereal.png"),
  },
  {
    dishType: "Condiments and sauces",
    query: "Sauces",
    color: "#D24800",
    image: require("../assets/images/sauce.png"),
  },
  {
    dishType: "Desserts",
    query: "Desserts",
    color: "#FBA401",
    image: require("../assets/images/dessert.png"),
  },
  {
    dishType: "Drinks",
    query: "Drinks",
    color: "#2087B1",
    image: require("../assets/images/drink.png"),
  },
  {
    dishType: "Pancake",
    query: "Pancake",
    color: "#E78C45",
    image: require("../assets/images/pancake.png"),
  },
  {
    dishType: "Salad",
    query: "Salad",
    color: "#2AAB00",
    image: require("../assets/images/salad.png"),
  },
  {
    dishType: "Sandwiches",
    query: "Sandwiches",
    color: "#218B6A",
    image: require("../assets/images/sandwich.png"),
  },
  // {
  //   dishType: "Sweets",
  //   query: "Sweets",
  //   color: "#75D456",
  //   image: require("../assets/images/sweet.png"),
  // },
];

export const mealTypeArray = [
  {
    id: 1,
    mealType: "Breakfast",
  },
  {
    id: 2,
    mealType: "Lunch",
  },
  {
    id: 3,
    mealType: "Dinner",
  },
  {
    id: 4,
    mealType: "Snack",
  },
  {
    id: 5,
    mealType: "Teatime",
  },
];

// ENVIROMENT VARIABLES
export const appId = "";
export const appKey = "";
