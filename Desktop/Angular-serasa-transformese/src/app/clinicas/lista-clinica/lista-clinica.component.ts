import { Component, OnInit } from '@angular/core';
import { Clinica } from '../clinica';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-lista-clinica',
  templateUrl: './lista-clinica.component.html',
  styleUrls: ['./lista-clinica.component.css']
})
export class ListaClinicaComponent implements OnInit {

  public clinicas!: Clinica[];

  constructor(private clinicaService: ClinicaService){}

  ngOnInit(): void {

    this.clinicaService.listarClinicas()

      .subscribe( clinicasRecebidas => {
        
        this.clinicas = clinicasRecebidas
        console.log(this.clinicas);
      },
      erro => console.log(erro)
      )

  }

}
