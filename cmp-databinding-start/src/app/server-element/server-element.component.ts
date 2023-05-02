import { Component
       , OnInit
       , Input
       , ViewEncapsulation
       , OnChanges
       , DoCheck
       , AfterContentInit
       , AfterViewInit
       , AfterContentChecked
       , AfterViewChecked
       , OnDestroy
       , SimpleChanges} from '@angular/core'; 

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit
, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy 
{
  @Input('srvElement') element: {name: string, type: string, content: string}
  @Input() name:string;
  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
