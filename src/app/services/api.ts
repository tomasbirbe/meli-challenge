import { Category } from "src/app/types";
import * as categories from "src/app/data/categories.json";

export const api = {
  getCategories: (): Promise<Category[]> =>
    new Promise((resolve, reject) => {
      if (categories) {
        resolve(categories.categories);
      } else {
        reject({ msg: "No categories found" });
      }
    }),
};
