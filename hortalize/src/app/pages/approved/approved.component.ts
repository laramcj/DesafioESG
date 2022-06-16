import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientStorageService } from '../client-form/client-storage.service';
import { Client } from '../client-form/client.model';
import { ImovelStorageService } from '../imovel-form/imovel-storage.service';
import { Imovel } from '../imovel-form/imovel.model';
import { Weather } from '../imovel-form/weather/weather.model';
import { WeatherService } from '../imovel-form/weather/weather.service';

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
  weather:Weather


  constructor(
    //private clientStorage: ClientStorageService,
    private weatherService: WeatherService,
    private imovelStorage: ImovelStorageService
  ) {

  }

  ngOnInit(): void {
    //this.client = this.clientStorage.getClient();
    this.imovel = this.imovelStorage.getImovel();
    this.weatherService.getWeather().subscribe(result => this.weather = result)
    console.log("weather", this.weather)
    console.log(this.imovel);
  }
}
