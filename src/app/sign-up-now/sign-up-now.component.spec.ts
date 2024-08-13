import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpNowComponent } from './sign-up-now.component';

describe('SignUpNowComponent', () => {
  let component: SignUpNowComponent;
  let fixture: ComponentFixture<SignUpNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
