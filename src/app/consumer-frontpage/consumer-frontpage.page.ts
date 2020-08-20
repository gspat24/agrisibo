import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-consumer-frontpage',
  templateUrl: './consumer-frontpage.page.html',
  styleUrls: ['./consumer-frontpage.page.scss'],
})
export class ConsumerFrontpagePage implements OnInit {

  public showFarm = false;
  constructor(private loadingController: LoadingController) { }

  public async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Searching for nearest farms...',
      duration: 5000
    });
    await loading.present();
    setTimeout(() => {
      this.showFarm = true;
    }, 5000);
  }

}
