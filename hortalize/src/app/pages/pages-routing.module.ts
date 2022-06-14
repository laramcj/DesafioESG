import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedComponent } from './approved/approved.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { DeniedComponent } from './denied/denied.component';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'imovel-form', component: ImovelFormComponent },
  { path: 'approved', component: ApprovedComponent },
  { path: 'denied', component: DeniedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
