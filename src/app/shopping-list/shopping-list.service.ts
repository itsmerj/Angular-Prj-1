import { Injectable } from "@angular/core";

import { Ingredients } from "../shared/ingredents.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  constructor() {}

  private ingredients: Ingredients[] = [
    new Ingredients("Apples", 5),
    new Ingredients("Tomatoes", 10),
  ];

  getIngredents() {
    return this.ingredients.slice();
  }
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
