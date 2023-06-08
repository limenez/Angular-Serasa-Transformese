

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { ContatoComponent } from './empresa/contato/contato.component';


import { RouterModule } from '@angular/router';
import { rotasConfig } from './app.routes';
import { DadosComponent } from './teste/dados/dados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservadoraComponent } from './navegacao/observadora/observadora.component';
import { ListaClinicaComponent } from './clinicas/lista-clinica/lista-clinica.component';
import { ClinicaService } from './clinicas/clinica.service';

import { HttpClientModule } from '@angular/common/http';
import { ListaPacienteComponent } from './pacientes/lista-paciente/lista-paciente.component';
import { PacienteService } from './pacientes/paciente.service';
import { CadastroPacienteComponent } from './pacientes/cadastro-paciente/cadastro-paciente.component';
import { ClinicaDetalheComponent } from './clinicas/clinica-detalhe/clinica-detalhe.component';
import { AtualizarClinicaComponent } from './clinicas/atualizar-clinica/atualizar-clinica.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DadosComponent,
    ObservadoraComponent,
    ListaClinicaComponent,
    ListaPacienteComponent,
    CadastroPacienteComponent,
    ClinicaDetalheComponent,
    AtualizarClinicaComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rotasConfig)],
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ClinicaService,
    PacienteService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
