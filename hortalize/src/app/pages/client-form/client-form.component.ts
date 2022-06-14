import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientStorageService } from './client-storage.service';

import { Client } from './client.model';
import { AgeValidator } from './age-validator';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  private useNumber = '[0-9]*';
  private letters = '[A-zÀ-ú ]+';

  clientForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private clientStorage: ClientStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  client() {}

  navigateImovel() {
    const client: Client = new Client(
      this.clientForm.get('id')?.value,
      this.clientForm.get('name')?.value,
      this.clientForm.get('email')?.value,
      this.clientForm.get('dateBirth')?.value,      
      this.clientForm.get('celPhone')?.value,
    );


    this.clientStorage.setClient(client);

    this.router.navigate(['imovel-form']);
  }

  private criarFormulario() {
    this.clientForm = this.formbuilder.group({
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.letters),
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateBirth: new FormControl('', [
        Validators.required,
        AgeValidator.getIdade,
      ]),
      celPhone: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(11),
      ]),
    });
  }
}
