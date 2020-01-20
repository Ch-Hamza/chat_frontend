import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { LdapService } from 'src/app/services/ldap.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  userList;
  currentUser;
  loaded = false;
  @Output() selected = new EventEmitter();

  constructor(private ldapService: LdapService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('ldap_user'))['attributes'];
    //console.log(this.currentUser);
    this.ldapService.find_all().subscribe(data => {
      //console.log(data)
      this.userList = data;
      this.loaded = true;
    })
  }

  send(user) {
    this.selected.emit(user);
  }

}
