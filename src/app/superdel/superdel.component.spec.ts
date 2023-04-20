import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperdelComponent } from './superdel.component';

describe('SuperdelComponent', () => {
  let component: SuperdelComponent;
  let fixture: ComponentFixture<SuperdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperdelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
