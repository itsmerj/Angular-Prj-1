import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.module";
import { Ingredients } from "../shared/ingredents.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe>();
  recipeselected = new EventEmitter<Recipe>();
  constructor(private shopppingListService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      "pizza",
      "fastfood recipe",
      "https://www.shutterstock.com/image-photo/piza-italian-pizza-savory-dish-260nw-2200602931.jpg",
      [new Ingredients("base", 1), new Ingredients("vege", 5)]
    ),
    new Recipe(
      "pumpkin pie",
      "Pumpkin pie is a dessert pie with a spiced",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oZ6zW-PUVaALCMzo998OVij-WBJAB59hkg&usqp=CAU",
      [new Ingredients("pumkin", 1), new Ingredients("ginger", 1)]
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }

  addToShopList(ingredents: Ingredients) {
    this.shopppingListService.onIngredientAdded(ingredents);
  }
  addToShopListIngredints(Ingredients: Ingredients[]) {
    console.log(...Ingredients);
    this.shopppingListService.IngredientAddedFromShopping(Ingredients);
    // this.shopppingListService.onIngredientAdded();
  }
  getIdRecipe(index: number) {
    return this.recipes[index];
  }
}
