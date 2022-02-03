
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CadastrosService } from '../cadastros.service';
import { Produto } from '../entities/produto';


@Component({
  selector: 'app-produtos-selecao',
  templateUrl: './produtos-selecao.component.html',
  styleUrls: ['./produtos-selecao.component.css']
})
export class ProdutosSelecaoComponent implements OnInit {

  produtoFiltro: Produto = new Produto()
  produtoSelecionado: Produto = new Produto()
  listaProdutos: Produto[] = []

  //Variaveis
  titulo: string = "Produtos Seleção"
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
    this.service.pesquisaFiltrosProdutos(this.produtoFiltro).subscribe(resposta => {

      if (resposta != null) {
        this.listaProdutos = resposta

      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }

  selecionaProduto(produtoSelecionado: Produto) {
    this.produtoSelecionado = produtoSelecionado
    this.sessao = false
  }

  incluirProduto() {
    this.produtoSelecionado = new Produto
    this.sessao = false
  }

  voltar() {
    this.sessao = true
    this.pesquisaFiltros()
  }

}
