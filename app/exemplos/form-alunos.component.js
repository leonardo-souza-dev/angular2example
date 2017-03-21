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
var FormAlunosComponent = (function () {
    function FormAlunosComponent() {
    }
    FormAlunosComponent.prototype.onClick = function (nome, rm) {
        if (nome.value == '' && rm.value == '') {
            alert('Campos de Nome e RM vazios!');
            return;
        }
        if (nome.value == '') {
            alert('Campo Nome vazio!');
            return;
        }
        if (rm.value == '') {
            alert('Campo RM vazio!');
            return;
        }
        alert('CADASTRO COM SUCESSO! \r\nNome: ' + nome.value + '\r\nRM: ' + rm.value);
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