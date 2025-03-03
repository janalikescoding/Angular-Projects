import { Component, OnInit } from '@angular/core';
import { CalculationServiceService } from '../services/calculation-service.service';

@Component({
  selector: 'app-operations-component',
  templateUrl: './operations-component.component.html',
  styleUrls: ['./operations-component.component.css']
})
export class OperationsComponentComponent implements OnInit {
  text: string = "";
  operationCount = 0;
  error: string = "";
  constructor(private service: CalculationServiceService) {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      const key = event.key;
      const regex = /^[0-9+/-/*///]$/;
      const regexOperations = /^[+/-/*///]$/;

      if(['Enter','='].indexOf(key) > -1) {
        this.calculate();
      } else if(['Backspace','Delete','c'].indexOf(key) > -1) {
        this.clear();
      } else if(regex.test(key) || key === 'Shift') {
        if(key !== 'Shift')
          this.handleClick({target: {innerHTML: key}}, regexOperations.test(key));
      } else {
        this.error = "Invalid key";
      }
      
    });
  
   }

  ngOnInit(): void {
  }

  clear() {
    this.text = "";
    this.operationCount = 0;
    this.error = "";
  }

  handleClick($event: any, operation?: boolean) {
    this.error = "";
    if(operation) {
     this.operationCount++; 
    }

    if(this.operationCount > 1) {
      this.error = "You can only have one operation at a time";
      this.operationCount--;
      return;
    }
    const target = $event.target as HTMLButtonElement;
    this.text += target.innerHTML;
  }

  async calculate() {
    if(this.text === "") {
      this.error = "Enter some numbers";
      return;
    }
    if(this.operationCount === 0) {
      this.error = "Enter an operation";
      return;
    }
    if(!Number(this.text[this.text.length - 1])) {
      this.text += '0';
    }

    this.operationCount = 0;
    this.error = "";
    await this.service.calculate(this.text).then((data: any) => {
      this.text += ' = ' + data;
    }).catch((error: any) => {
      this.error = error.error;
    });
  }


}
