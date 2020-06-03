import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService) { }
public show :boolean = false;
  public buttonName : any ="show";



toggle(){
this.show =!this.show;
if(this.show){

this.buttonName = "hide";
}
else {
  this.buttonName="show";
}
}



  ngOnInit(): void {
  }

}
