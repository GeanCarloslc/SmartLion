import { Injectable } from "@angular/core";
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cliente } from "./entidades/cliente";

@Injectable({

    providedIn: 'root'
})
export class CadastrosService {

    url: string = environment.apiBaseUrl + "api/cliente"

    constructor(
        private http: HttpClient
    ) { }


    salvarCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.url + "/salvarCliente", cliente);
    }

    populaClientes(): Observable<Cliente[]> {
        return this.http.get<any>(this.url + "/populaClientes");
    }

    pesquisaFiltrosClientes(cliente: Cliente): Observable<Cliente[]> {
        return this.http.post<any>(this.url + "/pesquisaFiltrosClientes", cliente);
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/delete/${employeeId}`);
    }
}