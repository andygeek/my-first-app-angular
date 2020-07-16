import { Component } from '@angular/core';

@Component({
    selector: 'app-if',
    templateUrl: './if.component.html'
})
export class IfComponent {

    visible : boolean;
    
    mostrar(){
        this.visible = true;
    }
    ocultar(){
        this.visible = false;
    }

    constructor(){
        this.visible = true;
    }
}