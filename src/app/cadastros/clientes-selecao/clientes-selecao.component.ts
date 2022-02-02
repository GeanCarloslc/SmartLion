
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CadastrosService } from '../cadastros.service';
import { Cliente } from '../entidades/cliente';


@Component({
  selector: 'app-clientes-detalhes',
  templateUrl: './clientes-selecao.component.html',
  styleUrls: ['./clientes-selecao.component.css']
})
export class ClientesSelecaoComponent implements OnInit {

  clienteFiltro: Cliente = new Cliente()
  clienteSelecionado: Cliente = new Cliente()
  listaClientes: Cliente[] = []

  //Variaveis
  titulo: string = "Clientes Seleção"
  sessao = true

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
    this.pesquisaFiltros()
  }

  pesquisaFiltros() {
    this.service.pesquisaFiltrosClientes(this.clienteFiltro).subscribe(resposta => {

      if (resposta != null) {
        this.listaClientes = resposta

      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }



  selecionaCliente(clienteSelecionado: Cliente) {
    this.clienteSelecionado = clienteSelecionado
    this.sessao = false
  }

  incluirCliente() {
    this.clienteSelecionado = new Cliente
    this.sessao = false
  }

  voltar() {
    this.sessao = true
    this.pesquisaFiltros()
  }

}
