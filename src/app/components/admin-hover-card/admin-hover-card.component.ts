import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-hover-card',
  templateUrl: './admin-hover-card.component.html',
  styleUrls: ['./admin-hover-card.component.css'],
})
export class AdminHoverCardComponent {
  open: boolean = false;
  testmakeropen: boolean = false;
  testnav:boolean = false;
  hovercard: boolean = false;
  navwarning: boolean = false;
  ordering:boolean=false;
  itemsession:boolean=false;
  timelimit:boolean=false;
  selection:boolean=false;
  itemprop:boolean=true;
}
