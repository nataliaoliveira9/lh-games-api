import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { RestritoComponent } from '../restrito/restrito.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { guardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'restrito',
    component: RestritoComponent,
    children: [
      {
        path: 'lista',
        component: ListaProdutoComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'cadastro',
        component: CadastroProdutoComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'editar/:id',
        component: AtualizaProdutoComponent,
        canActivate: [guardGuard],
      },
    ],
  },
  { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule],
})
export class RestritoRoutingModule {}
