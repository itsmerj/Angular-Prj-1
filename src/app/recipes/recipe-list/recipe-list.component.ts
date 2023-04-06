import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedrecipe = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe(
      'pizza',
      'fastfood recipe',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
    ),
    new Recipe(
      'recipename',
      'recipedesc',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
    ),
  ];

  sendtorecipe(recipein: Recipe) {
    this.selectedrecipe.emit(recipein);
  }
}
