import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonePageComponent } from './telephone-page.component';

describe('TelephonePageComponent', () => {
  let component: TelephonePageComponent;
  let fixture: ComponentFixture<TelephonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
