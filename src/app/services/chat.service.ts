import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string, receiver){
    let currentUser = JSON.parse(localStorage.getItem('ldap_user'))['attributes'];
    let message = {message: msg, receiver: receiver, source: currentUser['sn'][0], time: new Date()};
    //console.log('message sent');
    this.socket.emit("custom_send", JSON.stringify(message));
  }

  getMessage(messages) {
    return this.socket.on("custom_receive", (msg) => {messages.push(msg);console.log(messages);});
  }
}
