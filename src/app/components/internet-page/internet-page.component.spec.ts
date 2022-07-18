import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetPageComponent } from './internet-page.component';

describe('InternetPageComponent', () => {
  let component: InternetPageComponent;
  let fixture: ComponentFixture<InternetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
