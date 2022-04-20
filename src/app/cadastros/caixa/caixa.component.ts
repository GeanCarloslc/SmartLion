
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';
import { CadastrosService } from '../cadastros.service';
import { Caixa } from '../entities/caixa';
import { CaixaItens } from '../entities/caixaItens';
import { Produto } from '../entities/produto';


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  produtoSelecionado: Produto = new Produto()
  listaCaixaItens: CaixaItens[] = []
  caixaItem: CaixaItens = new CaixaItens()
  codigoProduto: String = ""
  qtProduto: number = 0
  vlTotal: number = 0.0

  //Variaveis
  titulo: string = "Frente de Caixa"
  sessao = true
  myimage: Observable<any>;

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

  pesquisaProduto() {
    this.service.pesquisaProduto(this.codigoProduto).subscribe(resposta => {
      if (resposta != null) {
        
        this.produtoSelecionado = resposta

      } else {
        this.toastr.error('Código de barras não encontrado', 'Atenção!');
      }
    })
  }

  removeItem(caixaItem: CaixaItens) {
    var indice = this.listaCaixaItens.indexOf(caixaItem)
    this.vlTotal -= caixaItem.vlTotalItem
    this.listaCaixaItens.splice(indice, 1)
    this.toastr.success('Item removido com sucesso!', 'Atenção!');
  }

  incluirProduto() {
    this.produtoSelecionado.qtProduto = this.qtProduto
    this.vlTotal += this.produtoSelecionado.vlUnitario * this.qtProduto
    this.caixaItem.vlTotalItem = this.produtoSelecionado.vlUnitario * this.qtProduto

    this.caixaItem.idProduto = this.produtoSelecionado.id
    this.caixaItem.deProduto = this.produtoSelecionado.deProduto
    this.caixaItem.qtProduto = this.produtoSelecionado.qtProduto
    this.caixaItem.vlUnitario = this.produtoSelecionado.vlUnitario
    this.caixaItem.deMarca = this.produtoSelecionado.deMarca
    this.caixaItem.deCategoria = this.produtoSelecionado.deCategoria

    this.listaCaixaItens.push(this.caixaItem)
    this.caixaItem = new CaixaItens
    this.produtoSelecionado = new Produto
    this.qtProduto = 0 
  }

  calculaTotalItem(){
    this.produtoSelecionado.vlTotalProduto = this.produtoSelecionado.vlUnitario * this.qtProduto
  }

  finalizaPedidoCaixa() {
    this.service.finalizaPedidoCaixa(this.listaCaixaItens).subscribe(resposta => {

      if (resposta != null) {
        this.toastr.success('Pedido finalizado com sucesso!', 'Atenção!');
        setTimeout(() => {
          
          this.listaCaixaItens = []
          this.vlTotal = 0.0
        }, 2);
      } else {
        this.toastr.error('Algo deu errado', 'Atenção!');
      }
    })
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
        this.readFile(file, subscriber);
    });
    
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

}
