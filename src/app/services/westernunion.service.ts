import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WesternunionService {

  constructor(
    private http: HttpClient
  ) { }

  saveInfo(name: string, years: string, email: string): void {
    const ENDPOINT = 'http://localhost:9090/westernunion/createCustomer';
    const params = {
      name,
      years,
      email
    };
    // tslint:disable-next-line: deprecation
    this.http.post(ENDPOINT, params).subscribe(data => {
      console.log('Se creo el registro con id=== ', data);
      alert('Registro guardado con exito!!');
    });
  }

}
