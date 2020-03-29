import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const KEY = 'authToken';

@Injectable({ 
    providedIn: 'root' 
})
export class TokenService {

    private retToken = new BehaviorSubject<boolean>(false);

    constructor(private router: Router) { }

    hasToken() {
        //converte o valor em booleano o primeiro ! converte em falso e o segundo em true
        return this.retToken.asObservable();
       //return !!this.getToken();
    }

    setToken(token) {
        this.retToken.next(true);
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        this.retToken.next(false);
        window.localStorage.removeItem(KEY);
        //volta para a tela de login
        this.router.navigate(["/"])
    }
}