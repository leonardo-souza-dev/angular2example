"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var aluno_1 = require('./aluno');
var FormAlunosComponent = (function () {
    function FormAlunosComponent() {
        this.alunos = [];
    }
    FormAlunosComponent.prototype.onClick = function (nome, rm) {
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
        var novoAluno = new aluno_1.Aluno(nome["value"], rm["value"]);
        this.alunos.push(novoAluno);
        alert('CADASTRO COM SUCESSO! \r\nNome: ' + nome["value"] + '\r\nRM: ' + rm["value"] +
            '\r\n' + 'TOTAL DE ALUNOS CADASTRADOS: ' + this.alunos.length +
            '\r\n' + 'LISTAGEM DE ALUNOS NO CONSOLE (F12)');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('****************************');
        console.log('**   ALUNOS CADASTRADOS');
        console.log('****************************');
        console.log('**');
        for (var i = 0; i < this.alunos.length; i++) {
            console.log('**  NOME: ' + this.alunos[i].nome);
            console.log('**  RM: ' + this.alunos[i].rm);
            console.log('**');
        }
        console.log('****************************');
    };
    FormAlunosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-alunos',
            templateUrl: 'form-alunos.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormAlunosComponent);
    return FormAlunosComponent;
}());
exports.FormAlunosComponent = FormAlunosComponent;
//# sourceMappingURL=form-alunos.component.js.map