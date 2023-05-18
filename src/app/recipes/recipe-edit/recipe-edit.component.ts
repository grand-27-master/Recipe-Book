import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  
  id:number;
  editMode = false;

  constructor(private route: ActivatedRoute) {

  }
  
  ngOnInit() {

    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['index'];
        this.editMode = params['index'] != null;
      }
    );
  }
}
