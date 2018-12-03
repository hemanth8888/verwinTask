import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes : Routes =[
  {
    path: '',
    component : DetailsComponent
  },
  {
    path: 'dash',
    component : DashboardComponent
  },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
