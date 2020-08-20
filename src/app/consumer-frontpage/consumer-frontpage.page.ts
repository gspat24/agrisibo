import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-frontpage',
  templateUrl: './consumer-frontpage.page.html',
  styleUrls: ['./consumer-frontpage.page.scss'],
})
export class ConsumerFrontpagePage implements OnInit {

  public showFarm = false;
  constructor(private router: Router, private loadingController: LoadingController) { }

  public async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Searching for nearest farms...',
      duration: 2000
    });
    await loading.present();
    setTimeout(() => {
      this.showFarm = true;
    }, 2000);
  }

  public gotoFarm() {
    this.router.navigate(['/consumer-products']);
  }

}
