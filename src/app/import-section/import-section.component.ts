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

  uploadFile(event: any) {
    this.fileUpload = event.target.files[0].name;
    this.selected = true;
    this.icons = true;
    setTimeout(() => {
      this.exportFile = true;
    }, 1000);
  }
}
