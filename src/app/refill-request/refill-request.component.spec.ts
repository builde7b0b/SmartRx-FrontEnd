import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillRequestComponent } from './refill-request.component';

describe('RefillRequestComponent', () => {
  let component: RefillRequestComponent;
  let fixture: ComponentFixture<RefillRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefillRequestComponent]
    });
    fixture = TestBed.createComponent(RefillRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
