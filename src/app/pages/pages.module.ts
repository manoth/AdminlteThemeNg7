import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutsModule } from '../layouts/layouts.module';

import { DashboradComponent } from './dashborad/dashborad.component';

@NgModule({
  declarations: [DashboradComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule
  ]
})
export class PagesModule { }
