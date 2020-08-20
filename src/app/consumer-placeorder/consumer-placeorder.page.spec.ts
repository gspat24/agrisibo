import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumerPlaceorderPage } from './consumer-placeorder.page';

describe('ConsumerPlaceorderPage', () => {
  let component: ConsumerPlaceorderPage;
  let fixture: ComponentFixture<ConsumerPlaceorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerPlaceorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumerPlaceorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
