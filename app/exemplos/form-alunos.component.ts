import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'form-alunos',
    templateUrl: 'form-alunos.component.html'
})

export class FormAlunosComponent {

    onClick(pNome: string, pRm: number){
        alert('Nome: ' + pNome.value + '\r\nRM: ' + pRm.value);
    }
}