import { Component, OnDestroy, OnInit } from "@angular/core";

import { Ingredients } from "../shared/ingredents.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  subscription: Subscription;

  constructor(private listService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.listService.getIngredents();
    this.subscription = this.listService.ingerdientsChanged.subscribe(
      (ingredents: Ingredients[]) => {
        this.ingredients = ingredents;
      }
    );
  }

  edititem(index: number) {
    this.listService.editlist.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
