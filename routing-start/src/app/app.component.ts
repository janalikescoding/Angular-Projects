import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path: string = '';

  addActiveClass(event : any){
    console.log(event.target);
  }
}
