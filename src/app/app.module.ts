import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './Components/Messenging/chat-list/chat-list.component';
import { ChatListItemComponent } from './Components/Messenging/chat-list-item/chat-list-item.component';
import { ConversationComponent } from './Components/Messenging/conversation/conversation.component';
import { MessengingComponent } from './Components/Messenging/messenging.component';
import { RegisterComponent } from './Components/Registration/register/register.component';
import { LoginComponent } from './Components/Registration/login/login.component';

import { RouterModule } from '@angular/router';

const config: SocketIoConfig = { url: 'http://192.168.1.2:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatListItemComponent,
    ConversationComponent,
    MessengingComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
