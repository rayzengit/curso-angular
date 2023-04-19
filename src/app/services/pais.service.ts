import { Injectable } from "@angular/core";


@Injectable()
export class PaisService{
    public nombre_pais = 'Peru';
    public listado_pais = ['Peru','Argentina'];

    prueba(nombre_pais: string){
        return nombre_pais;
    }

    addPais(nombre_pais: string):Array<string>{
        this.listado_pais.push(nombre_pais);

        return this.getPais();
    }

    getPais():Array<string>{
        return this.listado_pais;
    }

    deletePais(index:number){
        this.listado_pais.splice(index, 1);
        return this.getPais();
    }
}