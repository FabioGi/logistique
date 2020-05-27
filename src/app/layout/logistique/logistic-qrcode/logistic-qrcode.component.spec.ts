import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticQrcodeComponent } from './logistic-qrcode.component';

describe('LogisticQrcodeComponent', () => {
  let component: LogisticQrcodeComponent;
  let fixture: ComponentFixture<LogisticQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
