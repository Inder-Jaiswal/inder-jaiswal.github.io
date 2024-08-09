import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
//import {  ROUTES } from './app.routes';
import { HeroComponent } from './hero/hero.component';
import { ProjsComponent } from './projs/projs.component';
import { Routes } from '@angular/router';
import { WhatidoComponent } from './whatido/whatido.component';
import { ProfCertificComponent } from './prof-certific/prof-certific.component';
import { ReachOutComponent } from './reach-out/reach-out.component';
import { ExpComponent } from './exp/exp.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';


export enum ROUTER_TOKENS {
  HERO = 'hero',
  PROJS = 'projs',
  NOT_FOUND = '**',
  CERTI = 'prof-certific',
  REACH = 'reach-out',
  MISSOC = 'misc-social',
  EXP = 'exp',
  PROF = 'proficiency',
  WHAT = 'whatido'
}


 const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
    title: "hero"
   },
   {
    path: ROUTER_TOKENS.PROF,
    component: ProficiencyComponent,
    title: "prof"
  },
  {
    path: ROUTER_TOKENS.PROJS,
    component: ProjsComponent,
    title: "app-projs",
  },
  {
    path: ROUTER_TOKENS.WHAT,
    component: WhatidoComponent,
    title: "whatido",
  },
  {
    path: ROUTER_TOKENS.CERTI,
    component: ProfCertificComponent,
    title: "certificates",
  },

  {
    path: ROUTER_TOKENS.REACH,
    component: ReachOutComponent,
    title: "reach-me"
  },
  {
    path: ROUTER_TOKENS.EXP,
    component: ExpComponent,
    title: "experiences"
  },
  {
    path: '',
    redirectTo: ROUTER_TOKENS.HERO,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
