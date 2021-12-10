import fs from "fs";
import path from "path";

const pathToFood = path.join(process.cwd(), "food", "food.json");

export const getFood = () => {
  const foodJSON = fs.readFileSync(pathToFood, "utf8");
  const foodData = JSON.parse(foodJSON);
  return foodData;
};
