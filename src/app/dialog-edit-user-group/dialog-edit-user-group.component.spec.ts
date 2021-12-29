import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserGroupComponent } from './dialog-edit-user-group.component';

describe('DialogEditUserGroupComponent', () => {
  let component: DialogEditUserGroupComponent;
  let fixture: ComponentFixture<DialogEditUserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditUserGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
