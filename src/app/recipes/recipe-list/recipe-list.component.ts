import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";
import { RecipeService } from "../recipe.service";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesser: RecipeService) {}
  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipesser.getRecipe();
  }
}
