import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectionComponent } from './conection.component';

describe('ConectionComponent', () => {
  let component: ConectionComponent;
  let fixture: ComponentFixture<ConectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
