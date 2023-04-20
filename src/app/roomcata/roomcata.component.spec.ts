import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomcataComponent } from './roomcata.component';

describe('RoomcataComponent', () => {
  let component: RoomcataComponent;
  let fixture: ComponentFixture<RoomcataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomcataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomcataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
