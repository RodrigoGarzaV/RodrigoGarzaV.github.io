import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  educationExperience : Array<any> = [];

constructor() { }

ngOnInit(): void {

  let education1 = {
    fecha: "2008-2014",
    ubicacion: "Monterrey, NL",
    nivel: "Primaria",
    escuela: "Tonallí",
    logros : [
      { descripcion: "Mejor jugador de basket del año 2013 en mi escuela" },
    ]
  };
  let education2 = {
    fecha: "2014-2017",
    ubicacion: "Monterrey, NL",
    nivel: "Secundaria",
    escuela: "Highlands",
    logros : [
      { descripcion: "Campeon futbol 11 varonil" },
    ]
  };
  let education3 = {
    fecha: "2017-2019",
    ubicacion: "Monterrey, NL",
    nivel: "Preparatoria",
    escuela: "CIDEB",
    logros : [
      { descripcion: "Mesa liderazgo" },
    ]
  };
  let education4 = {
    fecha: "2019-2023",
    ubicacion: "Monterrey, NL",
    nivel: "Universidad",
    escuela: "Tecnologico de Monterrey",
    logros : [
      { descripcion: "Promedio de mas de 90" },
    ]
  };

  this.educationExperience.push(education1);
  this.educationExperience.push(education2);
  this.educationExperience.push(education3);
  this.educationExperience.push(education4);
}

}