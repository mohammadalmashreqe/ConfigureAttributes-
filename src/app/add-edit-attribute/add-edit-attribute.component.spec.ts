import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAttributeComponent } from './add-edit-attribute.component';

describe('AddEditAttributeComponent', () => {
  let component: AddEditAttributeComponent;
  let fixture: ComponentFixture<AddEditAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
