import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserAddressBookComponent} from './user-address-book.component';

describe('UserAddressBookComponent', () => {
  let component: UserAddressBookComponent;
  let fixture: ComponentFixture<UserAddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddressBookComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
