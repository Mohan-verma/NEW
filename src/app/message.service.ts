import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {//
  public show :boolean=false;
  public buttonName :any ='show';
  constructor() { }
messages : string[] =[];
  
  add(message : string ){
    this.messages.push(message)
  }
  clear(){
    this.messages = [];
  }
  
  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}
