import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';
import { TokenService } from './core/token/token.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  token$: Observable<boolean>;

  constructor(private tokenService: TokenService){
  }

  ngOnInit(): void {
    this.token$ = this.tokenService.hasToken();
  }

  readonly menus: Array<PoMenuItem> = [
    { 
      label: 'Home', 
      link: '/principal',
      action: ''
    },
    { 
      label: 'Tarefas', 
      link: '../tarefas/task',
      //action: this.onClick.bind(this) 
      action: ''
    },
    
    { label: 'Logout',
      action: this.signOut.bind(this),
      link: '/'
    }
  ];

  private signOut() {
    this.tokenService.removeToken();
  }

}