import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayUptodateComponent } from './stay-uptodate.component';

describe('StayUptodateComponent', () => {
  let component: StayUptodateComponent;
  let fixture: ComponentFixture<StayUptodateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayUptodateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayUptodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
