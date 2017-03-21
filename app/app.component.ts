import { Component } from '@angular/core';
import { PrimeiroExemplo } from './exemplos/primeiro-exemplo.component';
import { CursosComponent } from './cursos/cursos.component';
import { DataBindingComponent } from './exemplos/data-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <primeiro-exemplo></primeiro-exemplo>
        <cursos-lista></cursos-lista>
        <exemplo-data-binding></exemplo-data-binding>
    `,
    directives: [ PrimeiroExemplo, CursosComponent, DataBindingComponent ]
})
export class AppComponent { }
