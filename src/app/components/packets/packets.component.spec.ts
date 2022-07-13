import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketsComponent } from './packets.component';

describe('PacketsComponent', () => {
  let component: PacketsComponent;
  let fixture: ComponentFixture<PacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
