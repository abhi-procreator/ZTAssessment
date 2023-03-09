import { Component } from '@angular/core';

@Component({
  selector: 'app-import-section',
  templateUrl: './import-section.component.html',
  styleUrls: ['./import-section.component.css']
})
export class ImportSectionComponent {

  fileUpload = "";
  selected: boolean = false;
  exportFile: boolean = false;
  icons: boolean = false;

  Screen1: boolean = true;
  Screen2: boolean = false;
  Screen3: boolean = false;
  Screen4: boolean = false;
  Screen5: boolean = false;

  uploadFile(event: any) {
    this.fileUpload = event.target.files[0].name;
    this.icons = true;
    this.Screen1 = false;
    this.Screen2 = true;
    setTimeout(() => {
      this.exportFile = true;
    }, 1000);
  }

  secondShow() {
    this.Screen2 = false;
    this.Screen3 = true;
   }
}
