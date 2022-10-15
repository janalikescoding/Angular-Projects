import { Component, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles:[`
    .online{
      color:white;
    }`]
  })
  export class ServerComponent {
    serverId: number = Math.floor(Math.random() * 10);;
    serverStatus: string = this.setStatus();

    getServerStatusString(){
      return this.serverStatus;
    }

    setStatus() {
      return Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE';
    }

    getColor(){
      return this.serverStatus === 'ONLINE' ? 'GREEN' : 'RED';
    }
  }