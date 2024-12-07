import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsOfClassComponent } from './records-of-class.component';

describe('RecordsOfClassComponent', () => {
  let component: RecordsOfClassComponent;
  let fixture: ComponentFixture<RecordsOfClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordsOfClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsOfClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
