import { Component } from "@angular/core";
import { Uniforme } from "./uniforme";


@Component({
    selector: 'uniformes',
    templateUrl: './uniformes.component.html'
})

export class UniformesComponent{
    public uniforme: Uniforme;
    public uniformes: Array<Uniforme>;
    
    constructor(){
        this.uniforme = new Uniforme("","","");
        this.uniformes = [
            new Uniforme("Adida","350","L"),
            new Uniforme("Nike","300","M")
        ]
    }

    onSumit(){
        console.log(this.uniforme);
    }
}