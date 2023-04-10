import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";
import { Ingredients } from "src/app/shared/ingredents.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private listsserves: ShoppingListService) {}
  @ViewChild("form") form: NgForm;
  subscription: Subscription;
  editmode: boolean = false;
  editIndex: number;
  ingredeant: Ingredients;

  ngOnInit() {
    this.subscription = this.listsserves.editlist.subscribe(
      (index: number) => (
        (this.editIndex = index),
        (this.editmode = true),
        (this.ingredeant = this.listsserves.getEdit(index)),
        this.form.setValue({
          name: this.ingredeant.name,
          amount: this.ingredeant.amount,
        })
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    let newLyAdded: Ingredients = new Ingredients(
      form.value.name,
      form.value.amount
    );
    // this.editIndex
    //   ? this.listsserves.onEdit(this.editIndex, this.ingredeant)
    //   : this.listsserves.onIngredientAdded(newLyAdded);

    if (this.editmode) {
      this.listsserves.onEdit(this.editIndex, newLyAdded);
    } else {
      this.listsserves.onIngredientAdded(newLyAdded);
    }
  }

  delete() {
    this.listsserves.deletIngredient(this.editIndex);
    this.clearr();
  }

  clearr() {
    this.editmode = false;
    this.form.reset();
  }
}
