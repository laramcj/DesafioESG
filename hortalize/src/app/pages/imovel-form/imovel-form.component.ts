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
      this.imovelForm.get('type')?.value,
      this.imovelForm.get('income')?.value,
      this.imovelForm.get('value')?.value,
      this.imovelForm.get('entry')?.value,
      this.imovelForm.get('installments')?.value
    );

    const approvedValue = imovel.value! - imovel.entry!;

    const parcela = this.imovelForm.get('installments')?.value;
    const taxAccount = 0.1;
    const ceilIncome = 0.3;

    const initialInstallment =
      (approvedValue * (100 + taxAccount * (parcela / 12))) / 100 / parcela;

    imovel.initialInstallment = initialInstallment;
    imovel.approvedValue = approvedValue;

    this.imovelStorage.setImovel(imovel);

    const valuePlusTax =
      imovel.approvedValue! + imovel.approvedValue! * taxAccount;
    const maxInstallmentValue = valuePlusTax / imovel.installments!;
    const minIncomeValue = imovel.income! * ceilIncome;

    if (maxInstallmentValue > minIncomeValue) {
      this.router.navigate(['denied']);
    } else {
      this.router.navigate(['approved']);
    }

    this.onSubmit(imovel);
  }

  onSubmit(imovel: Imovel) {
    const client: Client = this.clientStorage.getClient();
    console.log(client);
    const simulacao: Simulacao = {
      client: {
        name: client.name,
        job: client.job,
        cpf: client.cpf,
        email: client.email,
        datebirth: client.datebirth,
        zipcode: client.zipcode,
        celphone: client.celphone,
      },
      imovel: {
        type: imovel.type,
        income: imovel.income,
        value: imovel.value,
        entry: imovel.entry,
        installments: imovel.installments,
        approvedValue: imovel.approvedValue,
        initialInstallment: imovel.initialInstallment,
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
    //if (simulacao.client.celphone!.length < 11) return false;
    //if (simulacao.imovel.type != 'Residencial' && 'Comercial') return false;
    if (simulacao.imovel.income! <= 0) return false;
    if (simulacao.imovel.value! <= 0) return false;
    if (simulacao.imovel.entry! <= 0) return false;
    if (simulacao.imovel.installments! > 360) return false;
    return true;
  }

  private criarFormulario() {
    this.imovelForm = this.fb.group({
      type: new FormControl('', [Validators.required]),
      income: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      entry: new FormControl('', [
        Validators.required,
        ImovelValidator.entryValue,
      ]),
      installments: new FormControl('', [
        Validators.required,
        ImovelValidator.installmentsNumber,
      ]),
    });
  }
}
