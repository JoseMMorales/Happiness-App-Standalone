import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { PeopleTableComponent } from 'src/app/components';
import { SpinnerComponent } from 'src/app/components/spinner';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PeopleTableComponent,
    SpinnerComponent,
  ],
})
export class HomeModule {}
