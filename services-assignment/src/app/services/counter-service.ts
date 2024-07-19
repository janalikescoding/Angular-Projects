import { Injectable } from "@angular/core";
import { LoggingService } from "./logging-service";

@Injectable({providedIn:'root'})
export class CounterService{
    activations : number = 0;
    deactivations : number = 0;

    constructor(private loggingService : LoggingService){}

    activated(){
        this.activations++;
        this.loggingService.logAction(this.activations, 'ACTIVATION');
    }

    deactivated(){
        this.deactivations++;
        this.loggingService.logAction(this.deactivations, 'DEACTIVATION');
    }
}