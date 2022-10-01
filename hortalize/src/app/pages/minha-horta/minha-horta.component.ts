import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientStorageService } from '../client-form/client-storage.service';


@Component({
  selector: 'app-minha-horta',
  templateUrl: './minha-horta.component.html',
  styleUrls: ['./minha-horta.component.css']
})
export class MinhaHortaComponent implements OnInit {
  private useNumber = '[0-9]*';
  private letters = '[A-zÀ-ú ]+';

  clientForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private clientStorage: ClientStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarFormulario();
  }

  private buscarFormulario() {
    this.clientForm = this.formbuilder.group({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  navigateLogin() {
    this.router.navigate(['minha-horta']);
  }

}
