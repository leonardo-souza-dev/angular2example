import { Component } from '@angular/core'
import { Aluno } from './aluno'

@Component({
    moduleId: module.id,
    selector: 'form-alunos',
    templateUrl: 'form-alunos.component.html'
})


export class FormAlunosComponent {

    private alunos : Array<Aluno> = [];

    onClick(nome: string, rm: number){
        if (nome["value"] == '' && rm["value"] == '') {
            alert('Campos de Nome e RM vazios!');
            return;
        }
        if (nome["value"] == '') {
            alert('Campo Nome vazio!');
            return;
        }
        if (rm["value"] == '') {
            alert('Campo RM vazio!');
            return;
        }

        let novoAluno = new Aluno(nome["value"], rm["value"]);

        this.alunos.push(novoAluno);

        alert('CADASTRO COM SUCESSO! \r\nNome: ' + nome["value"] + '\r\nRM: ' + rm["value"] + 
        '\r\n' + 'TOTAL DE ALUNOS CADASTRADOS: ' + this.alunos.length +
        '\r\n' + 'LISTAGEM DE ALUNOS NO CONSOLE (F12)');

        console.log('');console.log('');console.log('');console.log('');console.log('');console.log('');
        console.log('****************************');
        console.log('**   ALUNOS CADASTRADOS');
        console.log('****************************');
        console.log('**');
        for(var i = 0; i < this.alunos.length; i++){
            console.log('**  NOME: ' + this.alunos[i].nome);
            console.log('**  RM: ' + this.alunos[i].rm);
            console.log('**');
        }
        
        console.log('****************************');
        
    }
}