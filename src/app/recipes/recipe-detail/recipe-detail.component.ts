import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private recipeser: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  recipe: Recipe;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.recipe = this.recipeser.getIdRecipe(this.id);
    });
  }

  toShoppingList() {
    this.recipeser.addToShopListIngredints(this.recipe.ingredients);
  }

  editUrl() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  deleterecipe() {
    this.recipeser.deleteRecipe(this.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
