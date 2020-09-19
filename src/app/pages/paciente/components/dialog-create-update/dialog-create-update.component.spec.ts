import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateUpdateComponent } from './dialog-create-update.component';

describe('DialogCreateUpdateComponent', () => {
  let component: DialogCreateUpdateComponent;
  let fixture: ComponentFixture<DialogCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
