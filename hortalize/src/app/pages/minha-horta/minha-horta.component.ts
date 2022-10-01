import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client-form/client.model';
import { ImovelStorageService } from '../imovel-form/imovel-storage.service';
import { Imovel } from '../imovel-form/imovel.model';
import { Weather } from '../imovel-form/weather/weather.model';
import { WeatherService } from '../imovel-form/weather/weather.service';


@Component({
  selector: 'app-minha-horta',
  templateUrl: './minha-horta.component.html',
  styleUrls: ['./minha-horta.component.css']
})
export class MinhaHortaComponent implements OnInit {
  client!: Client;
  imovel!: Imovel;
  initialInstallment!: number;
  approvedValue!: number;
  weather:Weather

  constructor(
    private weatherService: WeatherService,
    private imovelStorage: ImovelStorageService
  ) {
  }

  ngOnInit(): void {
    this.imovel = this.imovelStorage.getImovel();
    this.weatherService.getWeather().subscribe(result => this.weather = result)
    console.log("weather", this.weather)
    console.log(this.imovel);
  }
}
