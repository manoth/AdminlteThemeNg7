import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-red sidebar-mini fixed';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
