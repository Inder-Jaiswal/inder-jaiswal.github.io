import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { HeroComponent } from './hero/hero.component';
import { WhatidoComponent } from './whatido/whatido.component';
import { EducationCertificComponent } from './education-certific/education-certific.component';
import { ExpComponent } from './exp/exp.component';
import { ProjsComponent } from './projs/projs.component';
import { ProfCertificComponent } from './prof-certific/prof-certific.component';
import { MiscSocialComponent } from './misc-social/misc-social.component';
import { ReachOutComponent } from './reach-out/reach-out.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProficiencyComponent,
    HeroComponent,
    WhatidoComponent,
    EducationCertificComponent,
    ExpComponent,
    ProjsComponent,
    ProfCertificComponent,
    MiscSocialComponent,
    ReachOutComponent,
    HeadComponent,
    FootComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,RouterLink,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
