import { EventEmitter, Injectable } from "@angular/core";

import { Ingredients } from "../shared/ingredents.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  ingerdientsChanged = new EventEmitter<Ingredients[]>();
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
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }
  IngredientAddedFromShopping(ingredents: Ingredients[]) {
    this.ingredients.push(...ingredents);
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }
}
