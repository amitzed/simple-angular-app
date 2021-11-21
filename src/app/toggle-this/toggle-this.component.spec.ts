import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThisComponent } from './toggle-this.component';

describe('ToggleThisComponent', () => {
  let component: ToggleThisComponent;
  let fixture: ComponentFixture<ToggleThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
