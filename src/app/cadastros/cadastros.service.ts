import { Injectable } from "@angular/core";
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cliente } from "./entities/cliente";
import { Produto } from "./entities/produto";

@Injectable({

    providedIn: 'root'
})
export class CadastrosService {

    urlCliente: string = environment.apiBaseUrl + "api/cliente"
    urlProduto: string = environment.apiBaseUrl + "api/produto"

    constructor(
        private http: HttpClient
    ) { }

    // populaClientes(): Observable<Cliente[]> {
    //     return this.http.get<any>(this.url + "/populaClientes");
    // }

    salvarCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.urlCliente + "/salvarCliente", cliente);
    }

    pesquisaFiltrosClientes(cliente: Cliente): Observable<Cliente[]> {
        return this.http.post<any>(this.urlCliente + "/pesquisaFiltrosClientes", cliente);
    }

    excluirCliente(id: number): Observable<void> {
        return this.http.delete<void>(`${this.urlCliente}/excluirCliente/${id}`);
    }

    salvarProduto(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.urlProduto + "/salvarProduto", produto);
    }

    pesquisaFiltrosProdutos(produto: Produto): Observable<Produto[]> {
        return this.http.post<any>(this.urlProduto + "/pesquisaFiltrosProdutos", produto);
    }

    excluirProduto(id: string): Observable<void> {
        return this.http.delete<void>(`${this.urlProduto}/excluirProduto/${id}`);
    }
}