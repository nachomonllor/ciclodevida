import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  usuario = new Usuario();

  ngOnInit(): void {
  }
 
  Ingresar() {
    console.log(this.usuario);

    if(this.usuario.email == "admin@mail.com" && this.usuario.pass == "1234") {
      this.route.navigate(['home'])
    } else {
      this.route.navigate(['error'])
    }
  }
}