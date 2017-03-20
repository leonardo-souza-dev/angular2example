import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    /*
    template: `
        <p>Curso: {{ nome }}</p>
        <p>Lista de Disciplinas</p>
        <ul>
            <li *ngFor="let disciplina of disciplinas">
                {{ disciplina }}
            </li>
        </ul>
        `
    */
    templateUrl: 'cursos.component.html'
})
export class CursosComponent { 

    nome = 'MBA Java Soa';
    disciplinas = ['Persistencia', 'Java Web', 'EJB 3.0', 'Responsive Design'];
}
