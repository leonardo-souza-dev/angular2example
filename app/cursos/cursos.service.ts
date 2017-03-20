import { Injectable } from '@angular/core';

@Injectable()
export class CursosService{
    getDisciplinas(){
        return ['Persistencia', 'Java Web', 'EJB 3.0', 'Responsive Design'];
    }
}