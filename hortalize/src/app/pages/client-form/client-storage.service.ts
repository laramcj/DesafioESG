import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientStorageService {
  client!: Client

  constructor() { }

  setClient(client: Client){
    this.client = client
  }
  getClient(): Client{
    return this.client
  }
}
