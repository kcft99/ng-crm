import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadListComponent } from './lead-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('LeadListComponent', () => {
  let component: LeadListComponent;
  let fixture: ComponentFixture<LeadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadListComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
