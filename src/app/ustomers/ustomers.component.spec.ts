import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstomersComponent } from './ustomers.component';

describe('UstomersComponent', () => {
  let component: UstomersComponent;
  let fixture: ComponentFixture<UstomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UstomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UstomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
