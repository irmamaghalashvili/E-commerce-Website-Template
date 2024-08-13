import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClothesComponent } from './find-clothes.component';

describe('FindClothesComponent', () => {
  let component: FindClothesComponent;
  let fixture: ComponentFixture<FindClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindClothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
