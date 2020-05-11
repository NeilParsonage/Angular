import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  status : string = "Running";
  serverId : number = 2;
  username : string;
  serverStatus: string = "Offline";
  servers = ["TestServer 1", "TestServer 2", "TestServer 3"];
  i= 4;
  buttonclicked : boolean;

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  ngOnInit(): void {
  }

  buttonDisabled() {
    return this.username.length === 0;
  }

  onClick() {
    console.log("Button clicked value of input is " + this.username);
    this.username = "";
    this.servers.push("Testserver " + this.i++);
  }


  onClickAssignment() {
    this.servers.push("Testserver " + this.i++);
    this.buttonclicked = !this.buttonclicked;
  }

getColor() {
  this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  return this.serverStatus === "Online" ? "green" : "red";
}

}
