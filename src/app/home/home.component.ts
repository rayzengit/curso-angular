import { Component } from '@angular/core';
import { PaisService } from '../services/pais.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [PaisService]
})
export class HomeComponent {
    public titulo = "Pagina Principal";
    public paises_listado: Array<string> = [];
    public pais_a_guardar!: string;
    
    public fecha;
    public nombre = "Gustavo Prieto Cruz";
    
    constructor(
        private _paisService: PaisService
    ){
        this.fecha = new Date(2023, 4, 18);
    }

    ngOnInit(){
        this.paises_listado = this._paisService.getPais();
        console.log(this.paises_listado);
    }
    
    guardarPais(){
        this._paisService.addPais(this.pais_a_guardar);
        this.pais_a_guardar = "";
    }
    
    eliminarPais(index:number){
        
        this._paisService.deletePais(index);
    }
}