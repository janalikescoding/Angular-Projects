import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',  
  // selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
  })
  export class ServersComponent {
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    clickToggle: boolean = false;
    serverName:string = "TestServer";
    servers = ['Server 1, Server 2'];

    constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      },2000);
    }

    onMouseClick(){
      this.clickToggle = !this.clickToggle;
      // if(this.clickToggle){
      //   this.servers.push(this.serverName);
      //   this.serverCreationStatus = 'Server Created! the name is: ' + this.serverName;
      //   document.getElementById('serverToggleBtn').textContent = "Delete Server";
      // }else{
      //   this.servers.pop();
      //   this.serverCreationStatus = 'Server Deleted!';
      //   document.getElementById('serverToggleBtn').textContent = "Add Server";
      // }
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server Created! the name is: ' + this.serverName;
    }

    onTextInput(event: Event){
      this.serverName = (<HTMLTextAreaElement>event.target).value;
    }
  }