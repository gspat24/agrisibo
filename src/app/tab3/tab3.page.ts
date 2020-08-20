import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public orders = [{
    number: '11',
    status: 'danger',
    vegetables: [{
      name: 'Sayote',
      kilo: 5,
      price: 40
    }, {
      name: 'Cabbage',
      kilo: 10,
      price: 800
    }, {
      name: 'Gabi',
      kilo: 2,
      price: 160
    }],
    total: 1000
  }, {
    number: '12',
    status: 'danger',
    vegetables: [{
      name: 'Cabbage',
      kilo: 15,
      price: 1200
    }, {
      name: 'Gabi',
      kilo: 5,
      price: 400
    }],
    total: 1600
  }, {
    number: '13',
    status: 'primary',
    vegetables: [{
      name: 'Sibuyas',
      kilo: 10,
      price: 1000
    }],
    total: 1000
  }, {
    number: '14',
    status: 'primary',
    vegetables: [{
      name: 'Pechay',
      kilo: 5,
      price: 30
    }, {
      name: 'Cabbage',
      kilo: 10,
      price: 800
    }, {
      name: 'Sibuyas',
      kilo: 2,
      price: 200
    }],
    total: 1030
  }];

  public orders$ = of(this.orders.slice().reverse());
  constructor() { }

  public ionViewDidEnter() {
    setTimeout(() => {
      this.orders.push({
        number: '15',
        status: 'primary',
        vegetables: [{
          name: 'Sayote',
          kilo: 5,
          price: 40
        }, {
          name: 'Cabbage',
          kilo: 10,
          price: 800
        }, {
          name: 'Gabi',
          kilo: 2,
          price: 160
        }],
        total: 1000
      });
      this.orders$ = of(this.orders.slice().reverse());
    }, 3000);
  }

}
