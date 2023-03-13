import { Component } from '@angular/core';

@Component({
  selector: 'app-export-section',
  templateUrl: './export-section.component.html',
  styleUrls: ['./export-section.component.css']
})
export class ExportSectionComponent {

  Screen1: boolean = true;
  Screen2: boolean = false;
  Screen3: boolean = false;
  selected: boolean = false;      
  exportFile: boolean = true; 
   
  constructor() { }
  
  uploadFile(event: any) { }
}
