import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DofuViewComponent } from './dofu-view.component';

describe('DofuViewComponent', () => {
  let component: DofuViewComponent;
  let fixture: ComponentFixture<DofuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DofuViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DofuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
