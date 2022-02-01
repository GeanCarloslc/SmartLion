import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesSelecaoComponent } from './clientes-selecao/clientes-selecao.component';
import { ProdutosSelecaoComponent } from './produtos-selecao/produtos-selecao.component';
import { MatButtonModule } from '@angular/material/button';
import { ClienteDetalhesComponent } from './clientes-selecao/cliente-detalhes/cliente-detalhes.component';



const routes: Routes = [
  { path: 'clientesSelecao', component: ClientesSelecaoComponent },
  { path: 'ClienteDetalhes', component: ClienteDetalhesComponent},
  { path: 'produtosSelecao', component: ProdutosSelecaoComponent},

  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    MatButtonModule
  ],
  exports: [
    RouterModule, 
    MatButtonModule
  ]
})
export class CadastrosRoutingModule { }
