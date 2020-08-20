import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login-options/login-options.module').then( m => m.LoginOptionsPageModule)
  },
  {
    path: 'consumer-frontpage',
    loadChildren: () => import('./consumer-frontpage/consumer-frontpage.module').then( m => m.ConsumerFrontpagePageModule)
  },
  {
    path: 'consumer-products',
    loadChildren: () => import('./consumer-products/consumer-products.module').then( m => m.ConsumerProductsPageModule)
  },
  {
    path: 'consumer-placeorder',
    loadChildren: () => import('./consumer-placeorder/consumer-placeorder.module').then( m => m.ConsumerPlaceorderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
