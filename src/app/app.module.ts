import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './Components/Messenging/chat-list/chat-list.component';
import { ChatListItemComponent } from './Components/Messenging/chat-list-item/chat-list-item.component';
import { ConversationComponent } from './Components/Messenging/conversation/conversation.component';
import { MessengingComponent } from './Components/Messenging/messenging.component';
import { RegisterComponent } from './Components/Registration/register/register.component';
import { LoginComponent } from './Components/Registration/login/login.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatListItemComponent,
    ConversationComponent,
    MessengingComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
