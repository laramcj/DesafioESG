import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule } from 'ngx-mask';

import { PagesRoutingModule } from './pages-routing.module';
import { InicialComponent } from './inicial/inicial.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { DeniedComponent } from './denied/denied.component';
import { ApprovedComponent } from './approved/approved.component';
import { HttpClientModule } from '@angular/common/http';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';

@NgModule({
  declarations: [
    InicialComponent,
    ClientFormComponent,
    ImovelFormComponent,
    DeniedComponent,
    ApprovedComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [HttpClientModule],
})
export class PagesModule {}
