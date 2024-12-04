import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeftComponent } from './list-left.component';

describe('ListLeftComponent', () => {
  let component: ListLeftComponent;
  let fixture: ComponentFixture<ListLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
