
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import { CadastrosService } from '../../cadastros.service';
import { Categoria } from '../../entities/categoria';
import { Produto } from '../../entities/produto';


@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {


  @Input() produtoSelecionado: Produto
  @Output() resposta: EventEmitter<any> = new EventEmitter();
  listaCategorias: Categoria [] = []

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
    this.populaCategoria()
  }

  salvar() {

    this.service.salvarProduto(this.produtoSelecionado).subscribe(resposta => {

      if (resposta != null) {
        this.toastr.success('Produto Salvo com sucesso!', 'Atenção!');
        setTimeout(() => {
          this.voltar()
        }, 2);
      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }

  excluirProduto() {
    this.service.excluirProduto(this.produtoSelecionado.id).subscribe(resposta => {

        this.toastr.success('Produto excluído com sucesso!', 'Atenção!');
        setTimeout(() => {
          this.voltar()
        }, 2);

    })
  }

  voltar(back?: any) {
    this.resposta.emit(back)
  }

  populaCategoria() {
    this.service.populaCategoria().subscribe(resposta => {

      if (resposta != null) {
        this.listaCategorias = resposta

      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }

  validaSelect(cdCategoria: string){
    this.produtoSelecionado.cdCategoria = cdCategoria;
  }

  inputFileChange(event){

    if(event.target.files && event.target.files[0]){
      const foto = event.target.files[0]

      const formData = new FormData()
      formData.append('foto', foto)

    }

  }

}
