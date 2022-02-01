import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { ClientesSelecaoComponent } from './clientes-selecao/clientes-selecao.component';
import { ClienteDetalhesComponent } from './clientes-selecao/cliente-detalhes/cliente-detalhes.component';
import { ProdutosSelecaoComponent } from './produtos-selecao/produtos-selecao.component';
import { ComponentModule } from '../components/component.module';
import { NgxMaskModule } from 'ngx-mask';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    ClientesSelecaoComponent,
    ClienteDetalhesComponent,
    ProdutosSelecaoComponent,

  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    ComponentModule,
    NgxMaskModule.forChild(),
    FormsModule
  ], 
  exports: [
    ClientesSelecaoComponent,
    ClienteDetalhesComponent,
    ProdutosSelecaoComponent,
    
  ]
})
export class CadastrosModule { }
