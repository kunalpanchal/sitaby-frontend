import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "../../landing/landing.component";
import {ModuleWithProviders} from "@angular/core";

const APP_ROUTES: Routes = [
  {
    path : 'evolution',
    loadChildren: 'app/evolution/evolution.module#EvolutionModule'
  },
  {
    path: '**',
    component: LandingComponent
  }
  // ,
  //   {
  //     path: 'result/:leadId',
  //     component: ResultComponent
  //   }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
