import { Component, OnInit } from "@angular/core";

import { Ingredients } from "../shared/ingredents.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private listService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.listService.getIngredents();
    this.listService.ingerdientsChanged.subscribe((ingredents: Ingredients) => {
      this.ingredients = this.listService.getIngredents();
    });
  }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
