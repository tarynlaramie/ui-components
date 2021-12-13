import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCInputComponent } from './goa-input.component';

describe('WCInputComponent', () => {
  let component: WCInputComponent;
  let fixture: ComponentFixture<WCInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WCInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WCInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
