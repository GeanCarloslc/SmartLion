
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import { CadastrosService } from '../../cadastros.service';
import { Categoria } from '../../entities/categoria';
import { Produto } from '../../entities/produto';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';


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


  // base64: string = "Base64..."
  // fileSelected?: Blob
  // imageUrl: string = ''
  myimage: Observable<any>;

  //Mascaras
  telefone = "(00) 00000-0000"
  cep = "00000-000"
  cpf = "000.000.000-00"
  cnpj = "00.000.000/0000-00"

  constructor(

    private service: CadastrosService,
    private toastr: ToastrService,
    private sant: DomSanitizer

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

  // inputFileChange(event){

  //   if(event.target.files && event.target.files[0]){
  //     const foto = event.target.files[0]

  //     const formData = new FormData()
  //     formData.append('foto', foto)

  //   }

  // }

  // onSelectNewFile(files: FileList){
  //   this.fileSelected = files[0]
  //   this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string

  //   var reader = new FileReader();
  //   reader.readAsDataURL(this.fileSelected);
  //   reader.onloadend = function () {
  //   var base64String = reader.result;
    
  //   }
  // }

  

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
