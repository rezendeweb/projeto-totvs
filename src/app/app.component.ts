import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
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
      link: '/',
      action: '' 
    }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}