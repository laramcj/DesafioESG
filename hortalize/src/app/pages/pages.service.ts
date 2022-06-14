import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client-form/client.model';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3000/financeiro';

  constructor(private http: HttpClient) {}

  enviar(client: any): Observable<Client> {
    console.log('Serviço respondendo!', client);
    return this.http.post<Client>(this.baseUrl, client);
  }
}
