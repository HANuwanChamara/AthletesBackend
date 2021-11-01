import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAthletesComponent } from './create-athletes.component';

describe('CreateAthletesComponent', () => {
  let component: CreateAthletesComponent;
  let fixture: ComponentFixture<CreateAthletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAthletesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
