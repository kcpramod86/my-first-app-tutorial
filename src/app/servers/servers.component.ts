import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus= "No server was created"

  constructor() {
    //function(){
    //}
    // The arrow function is almost the same as the above expression
    //() here you passs the argument and {} here you have the function body
    setTimeout(() => {this.allowNewServer = true}, 2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'the server was created';

  }
  onUpdateServerName(event: any){

  }

}
