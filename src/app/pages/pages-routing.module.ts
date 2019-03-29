import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [{
    path: 'Dashboard', component: DashboradComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
