import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAuthenticationComponent } from './forms-authentication.component';

describe('FormsAuthenticationComponent', () => {
  let component: FormsAuthenticationComponent;
  let fixture: ComponentFixture<FormsAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
