import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { LoginComponent } from './home/signin/login/loign.component';
import { TaskComponent } from './home/tarefas/task/task.component';

const routes: Routes = [
              {
                path: '',
                component: LoginComponent
              },
              {path: 'principal', component: PrincipalComponent},
              {path: 'tarefas/task', component: TaskComponent},
              //se colocar qualquer rota abrirá o componente de erro, deve ser colocado por ultimo nas rotas
              {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
