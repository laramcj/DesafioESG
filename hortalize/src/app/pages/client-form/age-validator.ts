import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class AgeValidator {
  static getIdade(data: AbstractControl) {
    let dia = data.parent?.get('dateBirth')?.value?.substr(0, 2);
    let mes = data.parent?.get('dateBirth')?.value?.substr(2, 2);
    let ano = data.parent?.get('dateBirth')?.value?.substr(4, 4);
    let nasc = new Date(`${mes}/${dia}/${ano}`);

    let idadeDifMs = Date.now() - nasc.getTime();
    let idadeData = new Date(idadeDifMs);
    let idade = idadeData.getFullYear() - 1970;

    if (idade >= 18) {
      return null;
    } else {
      return { idadeValida: true };
    }
  }

  public getIdade() {}
}
