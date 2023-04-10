import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  constructor(
    private recipesser: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  recipes: Recipe[];

  ngOnInit() {
    this.recipesser.valuechanged.subscribe((recip: Recipe[]) => {
      this.recipes = recip;
    });
    this.recipes = this.recipesser.getRecipe();
  }
  editurl() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
