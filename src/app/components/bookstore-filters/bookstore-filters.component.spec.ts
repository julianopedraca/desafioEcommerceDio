import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreFiltersComponent } from './bookstore-filters.component';

describe('BookstoreFiltersComponent', () => {
  let component: BookstoreFiltersComponent;
  let fixture: ComponentFixture<BookstoreFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
