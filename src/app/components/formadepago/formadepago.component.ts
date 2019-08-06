import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MeansOfPayment } from '../../services/meansofpayment.service';


@Component({
  selector: 'app-formadepago',
  templateUrl: './formadepago.component.html'
})
export class FormadepagoComponent implements OnInit {
  idFormaDePago;
  formaDePago: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _meansOfPayment: MeansOfPayment,
    private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.idFormaDePago = params['id'];
    })

  }

  ngOnInit() {
    this._meansOfPayment.formaDePago(this.idFormaDePago).subscribe((data: any) => {
      // console.log(data);

      this.formaDePago = data.formasdepago;

    }, (error) => {
      if (error.ok === false) {
        this.router.navigate(['/']);
      }

    })
  }

  esObjetoVacio(objeto: {}) {
    if (Object.keys(objeto).length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
