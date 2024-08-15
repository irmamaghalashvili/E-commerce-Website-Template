import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByStyleComponent } from './by-style.component';

describe('ByStyleComponent', () => {
  let component: ByStyleComponent;
  let fixture: ComponentFixture<ByStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
