import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutsModule } from '../layouts/layouts.module';

import { DashboradComponent } from './dashborad/dashborad.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [DashboradComponent, LayoutComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule
  ]
})
export class PagesModule { }
