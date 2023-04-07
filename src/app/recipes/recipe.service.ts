import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.module";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipeselected = new EventEmitter<Recipe>();
  constructor() {}
  private recipes: Recipe[] = [
    new Recipe(
      "pizza",
      "fastfood recipe",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    ),
    new Recipe(
      "recipename",
      "recipedesc",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
}
