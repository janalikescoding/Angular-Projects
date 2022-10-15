import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-3-Directives';
  oddClick: boolean = false;
  clickTimestamps = [];

  updateClick(){
    this.oddClick = !this.oddClick;
    this.clickTimestamps.push(new Date());
  }

  getBGColor(){
    return this.clickTimestamps.length > 4 ? 'blue' : 'white';
  }
}
