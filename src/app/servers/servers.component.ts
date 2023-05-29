import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  serverCreation = "No Server Created"
  serverName = "Testserver";
  serverCreated = false
  servers: string[] = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000)
  }

  serverCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = "server created succesfully"
  }

  // to dislay the user input sync without refreshing the page call this method in the html with ($event) as parameter
  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}