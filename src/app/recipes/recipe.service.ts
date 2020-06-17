import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }


      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[] ) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      
      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
          
}