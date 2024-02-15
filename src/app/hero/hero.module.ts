import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
  ]
})
export class HeroModule { }
