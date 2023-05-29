import { Component } from "@angular/core";

@Component({  //it is called decorator
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverID = 10;
    serverStatus: string = 'Offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}