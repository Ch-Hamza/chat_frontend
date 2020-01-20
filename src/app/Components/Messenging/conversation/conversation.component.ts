import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input() incoming_messages;
  @Input() selectedUser;
  currentUser;
  msg = '';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('ldap_user'))['attributes'];
    //console.log(this.currentUser['sn'][0]);
    //console.log(this.selectedUser)
  }

  send_message() {
    if(this.msg != '') {
      this.chatService.sendMessage(this.msg, this.selectedUser['sn'][0]);
    }
    console.log(this.incoming_messages)
  }

}
