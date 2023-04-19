import { Component } from "@angular/core";

@Component ({
    selector: 'deporte',
    templateUrl: './deporte.component.html'
})

export class DeporteComponent {
    public nombre_componente ='Componente Deporte';
    public listado_deportes = 'Futbol, Boxeo, Natación y Voley';
    public nombre:string;
    public edad:number;
    public adulto:boolean;
    public profesion:Array<any> = ['Ingeniero', 'Boxeador', 69];
    comodin:any;

    constructor() {
        this.nombre = 'Gustavo Prieto Cruz';
        this.edad = 32;
        this.adulto = true;
        this.comodin = 2023;
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(34);
        console.log('Hola mundo!! ' + this.nombre + " " + this.edad);

        //Variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;
            var dos = 88;

            console.log("DENTRO DEL IF " + uno + " " + dos);
        }
        console.log("FUERA DEL IF " + uno + " " + dos);
    }

    cambiarNombre(){
        this.nombre = 'Juan Lopez';
    }

    cambiarEdad(edad: number){
        this.edad = edad;
    }
}