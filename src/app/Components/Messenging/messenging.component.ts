import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { LdapService } from 'src/app/services/ldap.service';
import { Router } from '@angular/router';
declare const io:any
@Component({
  selector: 'app-messenging',
  templateUrl: './messenging.component.html',
  styleUrls: ['./messenging.component.css']
})
export class MessengingComponent implements OnInit {

  incoming_messages = [];
  selectedChanged;
  loaded = false;
  currentUser;

  constructor(private chatService: ChatService,
    private ldapService: LdapService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('ldap_user'))['attributes'];
    //this.receive();
    if(this.currentUser) {
      this.ldapService.find_all().subscribe(data => {

        if(this.currentUser['sn'][0] == data[0]['attributes']['sn'][0]) {
          this.selectedChanged = data[1]['attributes'];
        } else {
          this.selectedChanged = data[0]['attributes'];
        }

        console.log(this.selectedChanged)
        this.loaded = true;
      });
      
      this.chatService.getMessage(this.incoming_messages);
    } else {
      this.router.navigate(['login']);
    }
  }

  send(item) {
    //console.log(item.attributes);
    this.selectedChanged = item.attributes;
  }
}
