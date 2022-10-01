import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaHortaComponent } from './minha-horta.component';

describe('MinhaHortaComponent', () => {
  let component: MinhaHortaComponent;
  let fixture: ComponentFixture<MinhaHortaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaHortaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaHortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
