import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import { EvolutionComponent } from './evolution/evolution.component';

const CALCULATOR_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EvolutionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CALCULATOR_ROUTES),
    CommonModule
  ],
  declarations: [EvolutionComponent]
})
export class EvolutionModule { }
