import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredents.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('apple', 10),
    new Ingredients('Tommato', 12),
  ];
}
