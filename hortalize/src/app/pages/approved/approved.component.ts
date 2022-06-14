import { Component, OnInit } from '@angular/core';
import { ClientStorageService } from '../client-form/client-storage.service';
import { Client } from '../client-form/client.model';
import { ImovelStorageService } from '../imovel-form/imovel-storage.service';
import { Imovel } from '../imovel-form/imovel.model';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css'],
})
export class ApprovedComponent implements OnInit {
  client!: Client;
  imovel!: Imovel;
  initialInstallment!: number;
  approvedValue!: number;


  constructor(
    //private clientStorage: ClientStorageService,
    private imovelStorage: ImovelStorageService
  ) {}

  ngOnInit(): void {
    //this.client = this.clientStorage.getClient();
    this.imovel = this.imovelStorage.getImovel();
    console.log(this.imovel);
    this.initialInstallment = this.imovel.initialInstallment!;

    this.approvedValue = this.imovel.approvedValue!;
  }
}
