import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse,HttpHeaders} from "@angular/common/http";
import { map } from "rxjs-compat/operator/map";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    get getPrueba(){
        return "Hola mundo desde el servicio";
    }
}