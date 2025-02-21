import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorldFrontEnd';
  message: any = '';

  constructor(private http: HttpClient) {
  }

  getMessage(){
   this.http.get('http://localhost:8080/getHelloMessage', {responseType: 'text'}).subscribe(data => {
     this.message = data;
   });
  }
}
