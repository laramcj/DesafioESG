import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { ClientStorageService } from '../client-form/client-storage.service';
import { Client } from '../client-form/client.model';
import { Imovel } from './imovel.model';
import { ImovelValidator } from './imovel-validator';
import { Router } from '@angular/router';
import { ImovelStorageService } from './imovel-storage.service';
import { ImovelService } from './imovel.service';
import { ThisReceiver } from '@angular/compiler';

export interface Simulacao {
  client: Client;
  imovel: Imovel;
}
@Component({
  selector: 'app-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.css'],
})
export class ImovelFormComponent implements OnInit {
  private useNumber = '[0-9]*';
  private letters = '[A-zÀ-ú ]+';
  imovelForm!: FormGroup;
  totalValue!: number;
  entryValue!: number;

  constructor(
    private fb: FormBuilder,
    private clientStorage: ClientStorageService,
    private imovelStorage: ImovelStorageService,
    private router: Router,
    private service: ImovelService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  imovel() {}

  navigateApprovedDenied() {
    const imovel: Imovel = new Imovel(
      this.imovelForm.get('zipCode')?.value,
      this.imovelForm.get('horta')?.value,
      this.imovelForm.get('type')?.value,
      this.imovelForm.get('nivel')?.value,
      this.imovelForm.get('consumo')?.value,
    );
    this.onSubmit(imovel);
  }

  onSubmit(imovel: Imovel) {
    const client: Client = this.clientStorage.getClient();
    console.log(client);
    const simulacao: Simulacao = {
      client: {
        name: client.name,
        email: client.email,
        datebirth: client.datebirth,
        celphone: client.celphone,
      },
      imovel: {
        zipcode: imovel.zipcode,
        horta: imovel.horta,
        type: imovel.type,
        nivel: imovel.nivel,
        consumo: imovel.consumo,
      },
    };

    const isFormValid: boolean = this.validacaoCampos(simulacao);
    if (isFormValid == true) {
      this.service.enviar(simulacao).subscribe({
        next: (response: Simulacao) => {
          console.log(simulacao);
        },
        error: (error: any) => {
          alert(
            'Não conseguimos o envio das informações do seu formulário, pois estamos sem contato com o banco de dados. Tente novamente!'
          );
        },
      });
    } else {
      alert('O seu formulário possui campos inválidos. Tente novamente.');
    }
  }

  validacaoCampos(simulacao: Simulacao) {
    if (simulacao.imovel.zipcode! == '') return false;
    if (simulacao.imovel.horta! == '') return false;
    return true;
  }

  private criarFormulario() {
    this.imovelForm = this.fb.group({
      zipCode: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(8),
      ]),
      horta: new FormControl('', [
        Validators.required,
        Validators.pattern(this.letters),
        Validators.minLength(3),
      ]),
      type: new FormControl('', [Validators.required]),
      nivel: new FormControl('', [Validators.required]),
      consumo: new FormControl('', [Validators.required]),
    });
  }
}
