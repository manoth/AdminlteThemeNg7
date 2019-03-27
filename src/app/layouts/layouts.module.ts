import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ControlSidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ControlSidebarComponent
  ]
})
export class LayoutsModule { }
