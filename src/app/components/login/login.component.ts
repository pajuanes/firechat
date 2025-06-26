import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  constructor( private _cs: ChatService) {
    
  }

  ingresar( proveedor: string ) {

    console.log('Ingresando con proveedor:', proveedor);
    this._cs.login( proveedor );

  }

}
