import { Component } from "@angular/core";
import { Recipe } from "./recipes/recipe.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  fetureLoad: string = "Recipe";

  feature(feature: string) {
    this.fetureLoad = feature;
  }
}
