import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Weather } from './weather.model';

@Injectable({
    providedIn: 'root',
  })
  export class WeatherService {
  
    constructor(private http:HttpClient) { }
  
    getWeather():Observable<Weather> {
        return this.http.get<any>('http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=e6df7b1281b0ca209a284194a9764ef9')
        .pipe(
          map(value => value.data)
        )
    }
  }