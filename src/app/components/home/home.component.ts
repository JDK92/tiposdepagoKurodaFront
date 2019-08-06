import { Component, OnInit } from '@angular/core';
import { MeansOfPayment } from '../../services/meansofpayment.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  meansOfPayment: [] = []

  constructor(
    private _meansOfPayment: MeansOfPayment,
    private router: Router) { }

  ngOnInit() {
    this._meansOfPayment.obtenerFormasDePago().subscribe((data: any) => {
      // console.log(data);
      this.meansOfPayment = data.formasdepago;      
    }, (err) => {
      console.log(err);
    })
  }

  getMeanOfPayment(idx: string) {
    this.router.navigate(['/formadepago', idx]);
  }


}
