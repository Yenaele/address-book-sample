import {Component, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {UserService} from '../service/user.service';
import {User} from '../../model/user';
import {UserAddressBookService} from '../service/user-address-book.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UserSelectorComponent),
    multi: true
  }]
})
export class UserSelectorComponent implements OnInit, ControlValueAccessor {

  searchChange = new Subject<string>();
  options: User[] = [];
  selectedUsers: User[] = [];
  isLoading = true;

  onChange = (_: any) => {
  };
  onTouch = (_: any) => {
  };
  compareFn = (a: User, b: User) => {
    if (a && b) {
      return a.userId === b.userId;
    }
    return false;
  };

  constructor(private userService: UserService,
              private addressBookService: UserAddressBookService) {
  }

  ngOnInit(): void {
    this.searchChange.pipe(debounceTime(400)).subscribe(key => {
        this.userService.searchUsersByKeyWord(key).subscribe(data => {
            this.options = data;
            this.isLoading = false;
          }
        );
      }
    );
    this.searchChange.next('');
  }

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange.next(value);
  }

  openAddressBookDialog() {
    this.addressBookService.select(this.selectedUsers).subscribe(res => {
      this.selectedUsers = res;
      this.valueChange(this.selectedUsers);
    });
  }

  valueChange(value: User[]) {
    this.onChange(value);
    this.onTouch(value);
  }

  writeValue(value: any) {
    this.selectedUsers = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

}
