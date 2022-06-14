import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Simulacao } from './imovel-form.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImovelService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3000/financeiro';

  constructor(private http: HttpClient) {}

  enviar(simulacao: any): Observable<Simulacao> {
    console.log('Serviço respondendo!', simulacao);
    return this.http.post<Simulacao>(this.baseUrl, simulacao);
  }
}
