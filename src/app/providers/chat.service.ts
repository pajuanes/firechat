import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, orderBy, query, limit, CollectionReference, Query } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

//Interface for chat items
import { Mensaje } from '../interface/mensaje.interface';

// Firebase Authentication imports
import { GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, signOut, getAuth, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private auth = getAuth();
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor( private afs: Firestore ) {
    // Initialize Firebase Authentication
    this.auth.onAuthStateChanged((user: User | null) => {
      if ( user ) {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
        console.log('Usuario autenticado:', this.usuario);
      } else {
        this.usuario = {};
        console.log('No hay usuario autenticado');
        return;
      }
    });
  }

  login( proveedor: string ) {
    console.log('Intentando iniciar sesión con el proveedor:', proveedor);
    let provider;
    if ( proveedor === 'google' ) {
      provider = new GoogleAuthProvider();
    } else if ( proveedor === 'twitter' ) {
      provider = new TwitterAuthProvider();
      // provider.setCustomParameters({ force_login: 'true' }); // fuerza el login en cada intento
    } else {
      console.error('Proveedor no soportado:', proveedor);
      return Promise.reject('Proveedor no soportado');
    }

    return signInWithPopup(this.auth, provider)
      .then(result => {
        console.log('Usuario autenticado:', result.user);
      })
      .catch(error => {
        console.error('Error en autenticación:', error);
      });
  }

  logout() {
    this.usuario = {};
    return signOut(this.auth);
  }

  cargarMensajes() {

    const baseRef = collection(this.afs, 'chats') as CollectionReference<Mensaje>;
    const itemsRef = query(baseRef, orderBy('fecha', 'desc'), limit(5)) as Query<Mensaje>;
    return collectionData<Mensaje>(itemsRef, { idField: 'id' }).pipe(
      map(mensajes => {
        console.log('Mensajes cargados:', mensajes);
        this.chats = [...mensajes].reverse();
        return this.chats;
      })
    );

  }

  agregarMensaje( texto: string ) {

    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return addDoc(collection(this.afs, 'chats'), mensaje);
    
  }
  
}
