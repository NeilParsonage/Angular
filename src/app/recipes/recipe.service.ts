import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe ('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe ('A 2nd Test Recipe', 'This is simply second  test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe ('A 3rd Test Recipe', 'This is simply a third test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }

}