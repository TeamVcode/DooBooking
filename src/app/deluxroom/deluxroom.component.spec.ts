import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxroomComponent } from './deluxroom.component';

describe('DeluxroomComponent', () => {
  let component: DeluxroomComponent;
  let fixture: ComponentFixture<DeluxroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeluxroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeluxroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
