import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-products',
  templateUrl: './consumer-products.page.html',
  styleUrls: ['./consumer-products.page.scss'],
})
export class ConsumerProductsPage implements OnInit {

  public vegetables = [{
    name: 'Sayote',
    price: 80,
    image: 'sayote',
    preorder: false,
    description: 'Chayote (Sechium edule), also known as mirliton and choko, is an edible plant belonging to the gourd family, Cucurbitaceae.'
  }, {
    name: 'Cabbage',
    price: 80,
    image: 'cabbage',
    preorder: false,
    description: 'Cabbage (comprising several cultivars of Brassica oleracea) is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads'
  }, {
    name: 'Pechay',
    price: 60,
    image: 'pechay',
    preorder: true,
    description: ' is a type of Chinese cabbage. Chinensis varieties do not form heads and have green leaf blades with lighter bulbous bottoms instead, forming a cluster reminiscent of mustard greens.'
  }, {
    name: 'Gabi',
    price: 80,
    image: 'gabi',
    preorder: false,
    description: 'Gabi (Colocasia esculenta (L.) Schott), known in English as taro, cocoyam, elephant’s ear, dasheen, and eddoe , is also known in Philippine local names as natong, katnga, gaway (Bicol), aba, abalong, balong, dagmay, gaway, kimpoy, lagbay, butig (Visayan), badyan (Hanunoo), aba, awa (Ilocano), atang (Itawis), and sudi (Ivatan).'
  }, {
    name: 'Sibuyas',
    price: 100,
    image: 'sibuyas',
    preorder: false,
    description: 'also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.'
  }];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public placeorder() {
    this.router.navigate(['/consumer-placeorder']);
  }

}
