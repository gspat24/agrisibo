import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumerFrontpagePage } from './consumer-frontpage.page';

describe('ConsumerFrontpagePage', () => {
  let component: ConsumerFrontpagePage;
  let fixture: ComponentFixture<ConsumerFrontpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerFrontpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumerFrontpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
