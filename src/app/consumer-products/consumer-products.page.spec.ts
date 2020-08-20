import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumerProductsPage } from './consumer-products.page';

describe('ConsumerProductsPage', () => {
  let component: ConsumerProductsPage;
  let fixture: ComponentFixture<ConsumerProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumerProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
