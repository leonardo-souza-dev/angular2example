import { Component } from '@angular/core';
import { PrimeiroExemplo } from './exemplos/primeiro-exemplo.component';
import { CursosComponent } from './cursos/cursos.component';
import { DataBindingComponent } from './exemplos/data-binding.component';
import { EventosComponent } from './exemplos/eventos.component';
import { FormAlunosComponent } from './exemplos/form-alunos.component';
import { StarWarsComponent } from './exemplos/star-wars.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        
        <br/><hr/><br/>
        <form-alunos></form-alunos>

        <br/><hr/><br/>
        <star-wars></star-wars>
        
        <br/><hr/><br/>
        <primeiro-exemplo></primeiro-exemplo>
        
        <br/><hr/><br/>
        <cursos-lista></cursos-lista>
        
        <br/><hr/><br/>
        <exemplo-data-binding></exemplo-data-binding>
        
        <br/><hr/><br/>
        <eventos-binding></eventos-binding>
    `,
    directives: [ PrimeiroExemplo, CursosComponent, DataBindingComponent, EventosComponent, FormAlunosComponent, StarWarsComponent ]
})
export class AppComponent { }
