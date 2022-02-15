import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { ClientesSelecaoComponent } from './clientes-selecao/clientes-selecao.component';
import { ClienteDetalhesComponent } from './clientes-selecao/cliente-detalhes/cliente-detalhes.component';
import { ProdutosSelecaoComponent } from './produtos-selecao/produtos-selecao.component';
import { ProdutoDetalhesComponent } from './produtos-selecao/produto-detalhes/produto-detalhes.component';
import { ComponentModule } from '../components/component.module';
import { NgxMaskModule } from 'ngx-mask';

import { FormsModule } from '@angular/forms';
import { CaixaComponent } from './caixa/caixa.component';


@NgModule({
  declarations: [
    
    ClientesSelecaoComponent,
    ClienteDetalhesComponent,
    ProdutosSelecaoComponent,
    ProdutoDetalhesComponent,
    CaixaComponent,

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
    CaixaComponent,
    
  ]
})
export class CadastrosModule { }
