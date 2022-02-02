
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import { CadastrosService } from '../../cadastros.service';
import { Cliente } from '../../entidades/cliente';


@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {


  @Input() clienteSelecionado: Cliente
  @Output() resposta: EventEmitter<any> = new EventEmitter();

  //Variaveis
  titulo: string = "Produto Detalhes"

  //Mascaras
  telefone = "(00) 00000-0000"
  cep = "00000-000"
  cpf = "000.000.000-00"
  cnpj = "00.000.000/0000-00"

  constructor(

    private service: CadastrosService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {

  }

  salvar() {

    this.service.salvarCliente(this.clienteSelecionado).subscribe(resposta => {

      if (resposta != null) {
        this.toastr.success('Cliente Salvo com sucesso!', 'Atenção!');
        setTimeout(() => {
          this.voltar()
        }, 2);
      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }

  excluirCliente() {
    this.service.excluirCliente(this.clienteSelecionado.id).subscribe(resposta => {
      if (resposta != null) {
        this.toastr.success('Cliente excluído com sucesso!', 'Atenção!');
        setTimeout(() => {
          this.voltar()
        }, 2);
      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }

  voltar(back?: any) {
    this.resposta.emit(back)
  }
}
