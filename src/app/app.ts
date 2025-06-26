import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatComponent } from "./components/chat/chat.component";
import { LoginComponent } from "./components/login/login.component";

import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChatComponent, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  public chats!: Observable<any[]>;

  constructor( db: Firestore,
               public _cs: ChatService ) { 
    const chatsCollection = collection(db, 'chats');
    this.chats = collectionData(chatsCollection);
  }
    
}

