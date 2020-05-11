import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe ('Tasty Schnitzel', 
                    'A suoer tastey Schnitzel', 
                    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
                    [
                        new Ingredient('Meat',1),
                        new Ingredient('French Fries',20)
                    ]),
        new Recipe ('Big Fat Burger', 
                    'A suoer tastey Burger', 
                    //'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
                    [
                        new Ingredient('Bun',1),
                        new Ingredient('Meat',1),
                        new Ingredient('French Fries',30)
                    ]),

             
      ];

      constructor(private slService: ShoppingListService) {
          
      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[] ) {
        this.slService.addIngredients(ingredients);
      }

}