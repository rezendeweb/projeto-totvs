import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: string;
  senha: string;

  constructor(private http: HttpClient,
              private tokenService: TokenService ) { }

  authenticate(userName: string, password: string) {
    
    this.usuario = 'renato@totvs.com.br'
    this.senha = '123'

    if(userName == this.usuario && password == this.senha){
      const token = 'ABC123';
      //window.localStorage.setItem('token',token);
      this.tokenService.setToken(token);
      return token;
    }else{
      return 'erro';
    }
  }
}
