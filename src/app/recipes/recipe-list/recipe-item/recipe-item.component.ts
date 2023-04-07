import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.module";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent {
  constructor(private recipese: RecipeService) {}
  @Input() recipe: Recipe;

  onclick() {
    this.recipese.recipeselected.emit(this.recipe);
  }
}
