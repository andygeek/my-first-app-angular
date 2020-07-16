import { Component } from '@angular/core';

@Component({
    selector: 'app-for',
    templateUrl: './for.component.html'
})
export class ForComponent {
    
    desaparece = false;
    lista : string[] = ['Happy hack with Angular', 'Happy hack with Angular']

    agregar(){
        this.lista.push('Happy hack with Angular')
        if(this.lista.length <= 1){
            this.desaparece = true;
        }
        else{
            this.desaparece = false;
        }
    }
    eliminar(){
        this.lista.splice(-1, 1);
        if(this.lista.length <= 1){
            this.desaparece = true;
        }
        else{
            this.desaparece = false;
        }
    } 

}