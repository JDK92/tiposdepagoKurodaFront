import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeansOfPayment {
    private API_URL = 'http://localhost:3000'
    constructor(private httpClient: HttpClient) {
        // console.log('Servicio funcionando!');
    }
    getQuery(query: String) {
        const url = `${this.API_URL}/${query}`;
        // console.log(url);
        return this.httpClient.get(url);
    }

    obtenerFormasDePago() {
        return this.getQuery('formasdepago')
    }

    formaDePago(idx: string) {
        return this.getQuery(`formasdepago/${idx}`);
    }


}