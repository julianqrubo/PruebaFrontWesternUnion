import { Component, OnInit, NgZone } from '@angular/core';
import { WesternunionService } from '../../services/westernunion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private westernunionService: WesternunionService,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  reloadForm(): void {
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
}

  saveCustomerInfo(name: string, years: string, email: string): void{
    if (!name || name.trim() === ''){
      alert('El nombre es requerido');
    }else{
      if (name.length > 40){
        alert('El nombre debe ser máximo de 40 caracteres');
      }
    }
    if (!years || years.trim() === ''){
      alert('La edad es requerida');
    }else{
      const YEARSRGX = /^\d*$/i;
      if (YEARSRGX.test(years)) {
        // tslint:disable-next-line: radix
        if (parseInt(years) <= 0){
          alert('La edad es inválida');
        }
        // tslint:disable-next-line: radix
        if (parseInt(years) < 18){
          alert('No cumple con la mayotía de edad');
        }
        // tslint:disable-next-line: radix
        if (parseInt(years) >= 100){
          alert('La edad máxima es de 99 años');
        }
      }else{
        alert('La edad debe ser un valor numérico');
      }
    }
    if (!email || email.trim() === ''){
      alert('El correo es requerido');
    }else{
      const EMAILRGX = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
      if (!EMAILRGX.test(email)){
        alert('El correo no cuenta con una estructura válida');
      }
    }
    this.westernunionService.saveInfo(name, years, email);
    this.reloadForm();
  }

}
