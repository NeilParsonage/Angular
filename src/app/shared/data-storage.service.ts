import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';


@Injectable({providedIn: 'root'})
export class DataStorageService {

constructor(private http: HttpClient, private recipeService: RecipeService) {}

storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://myfirstapp-bd475.firebaseio.com/recipes.json',recipes)
    .subscribe(response => {console.log(response);
    });
}


fetchRecipes() {
    this.http.get<Recipe[]>('https://myfirstapp-bd475.firebaseio.com/recipes.json')
    .subscribe(reccipes => { this.recipeService.setRecipes(reccipes);
    });
}

}