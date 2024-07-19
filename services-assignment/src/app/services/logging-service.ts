import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class LoggingService {
    activationCount : number;
    deactivationCount : number;

    constructor(){}

    
    logAction( count : number, action : string){
        console.log('The current ' + action + ' count is: ' + count)
    }

}