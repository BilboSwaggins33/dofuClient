import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTitleComponent } from './date-title.component';

describe('DateTitleComponent', () => {
  let component: DateTitleComponent;
  let fixture: ComponentFixture<DateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
