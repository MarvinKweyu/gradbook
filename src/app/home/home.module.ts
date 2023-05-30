import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImageCardComponent } from './shared/components/image-card/image-card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StudentPageComponent } from './shared/components/student-page/student-page.component';
import { StaffPageComponent } from './shared/components/staff-page/staff-page.component';
import { MemoriesPageComponent } from './shared/components/memories-page/memories-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    ImageCardComponent,
    HeaderComponent,
    StudentPageComponent,
    StaffPageComponent,
    MemoriesPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
