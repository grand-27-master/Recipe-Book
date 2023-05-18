import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDisplayComponent} from './recipes/recipe-display/recipe-display.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:[
        {path:'',component:RecipeDisplayComponent},
        {path:':id',component:RecipeDetailComponent}
    ]},
    {path:'shopping-list',component:ShoppingListComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{
}