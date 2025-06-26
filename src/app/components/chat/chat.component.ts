import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Servicios
import { ChatService } from '../../providers/chat.service';

// Importación de locale para español
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

@Component({
  selector: 'app-chat',
  standalone: true,
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styles: ``
})

export class ChatComponent implements OnInit{

  mensaje: string = '';
  elemento: any;

  constructor( public _cs: ChatService ) {
    registerLocaleData(localeEs);
    // Cargar mensajes al iniciar el componente
    setTimeout(() => {
      this._cs.cargarMensajes().subscribe( () => this.elemento.scrollTop = this.elemento.scrollHeight );
    }, 20);
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    console.log('Mensaje enviado:', this.mensaje);

    if ( this.mensaje.length === 0 ) {
      console.error('El mensaje no puede estar vacío');
      return;
    }

    this._cs.agregarMensaje( this.mensaje )
      .then( () => this.mensaje = '' )
      .catch( (err: any) => console.error('Error al agregar el mensaje:', err) );
  }

}
