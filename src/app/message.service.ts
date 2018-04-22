import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

messagesVar:string[] = [];

add(message:string){
  this.messagesVar.push(message);
}

clear(){
  this.messagesVar = [];
}
  constructor() { }

}
