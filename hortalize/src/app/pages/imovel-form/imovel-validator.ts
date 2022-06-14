import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ImovelValidator {
  static entryValue(campo: AbstractControl) {
    const valor = campo.parent?.get('value')?.value?.replace(',', '.');
    const entrada = campo.parent?.get('entry')?.value?.replace(',', '.');

    if (entrada < valor * 0.2) {
      return { entradaValida: true };
    } else {
      return null;
    }
  }

  static installmentsNumber(campo: AbstractControl) {
    const parcela: Number = campo.parent?.get('installments')?.value;

    if (parcela <= 360) {
      return null;
    } else {
      return { parcelaValida: true };
    }
  }
}
