import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe.module";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] !== undefined;
      this.initForm();
    });
  }
  goBack() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value["name"],
      this.recipeForm.value["recipedescription"],
      this.recipeForm.value["imagePath"],
      this.recipeForm.value["recipeingredents"]
    );
    if (this.editMode) {
      this.recipeService.update(this.id, newRecipe);
    } else {
      this.recipeService.addtoRecipes(newRecipe);
    }
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  private initForm() {
    let recipeName = "";
    let recipeimagePath = "";
    let recipedescription = "";
    let recipeingredents = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getIdRecipe(this.id);
      recipeName = recipe.name;
      recipeimagePath = recipe.imagePath;
      recipedescription = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingredent of recipe.ingredients) {
          recipeingredents.push(
            new FormGroup({
              name: new FormControl(ingredent.name, Validators.required),
              amount: new FormControl(ingredent.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeimagePath, Validators.required),
      recipedescription: new FormControl(
        recipedescription,
        Validators.required
      ),
      recipeingredents: recipeingredents,
    });
  }
  deleteingredeintsAdder(i: number) {
    (<FormArray>this.recipeForm.get("recipeingredents")).removeAt(i);
  }
  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get("recipeingredents")).controls;
  }
  addingredentSec() {
    (<FormArray>this.recipeForm.get("recipeingredents")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
}
