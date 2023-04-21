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
    public articulos: any;
    
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
        this._perticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if(!this.articulos){
                    console.log("Error en el Servidor");
                }
            },
            error=>{
                var errorMenssage = <any>error;
                console.log(errorMenssage);
            }
            
        );
    }
    onSumit(){
        this.uniformes.push(this.uniforme);
        this.uniforme = new Uniforme("","","");
    }
}