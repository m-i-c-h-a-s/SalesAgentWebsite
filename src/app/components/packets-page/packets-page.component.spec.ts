import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketsPageComponent } from './packets-page.component';

describe('PacketsPageComponent', () => {
  let component: PacketsPageComponent;
  let fixture: ComponentFixture<PacketsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
