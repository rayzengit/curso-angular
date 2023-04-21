import { Component } from "@angular/core";
import { Uniforme } from "./uniforme";
import { PeticionesService } from "../services/peticiones.service";


@Component({
    selector: 'uniformes',
    templateUrl: './uniformes.component.html',
    providers:[PeticionesService]
})

export class UniformesComponent{
    public uniforme: Uniforme;
    public uniformes: Array<Uniforme>;
    
    constructor(
        private _perticionesService: PeticionesService
    ){
        this.uniforme = new Uniforme("","","");
        this.uniformes = [
            new Uniforme("Adida","350","L"),
            new Uniforme("Nike","300","M")
        ]
    }
    ngOnInit(){
        console.log(this._perticionesService.getPrueba);
    }
    onSumit(){
        this.uniformes.push(this.uniforme);
        this.uniforme = new Uniforme("","","");
    }
}