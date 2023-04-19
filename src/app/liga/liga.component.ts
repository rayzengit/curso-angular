import { Component } from "@angular/core";
import { Liga } from "./liga";

@Component ({
    selector: 'liga-tag',
    templateUrl: './liga.component.html'
})

export class LigaComponent {
    public liga_titulo = 'Componente Liga:';
    public liga: Liga;
    public ligas:Array<Liga>;
    public liga_extranjera:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.liga = new Liga('Liga de compeones', 1990,'Argentina', true);
        this.ligas = [
            new Liga('Liga de compeones', 1990,'Argentina', true),
            new Liga('Super Copa', 1900,'Colombia', false),
            new Liga('Compa Mundial', 1800,'Uruguay', true)
        ];
        this.liga_extranjera = true;
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit(){
       
        console.log(this.liga);
        console.log(this.ligas);
    }
    cambiarExtranjero(valor: boolean){
        this.liga_extranjera = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}

