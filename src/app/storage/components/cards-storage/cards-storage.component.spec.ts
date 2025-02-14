import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStorageComponent } from './cards-storage.component';

describe('CardsStorageComponent', () => {
  let component: CardsStorageComponent;
  let fixture: ComponentFixture<CardsStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
