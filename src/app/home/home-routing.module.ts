import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MemoriesPageComponent } from './shared/components/memories-page/memories-page.component';
import { StaffPageComponent } from './shared/components/staff-page/staff-page.component';
import { StudentPageComponent } from './shared/components/student-page/student-page.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'graduates', pathMatch: 'full' },
      { path: 'graduates', component: StudentPageComponent },
      { path: 'staff', component: StaffPageComponent },
      { path: 'memories', component: MemoriesPageComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
