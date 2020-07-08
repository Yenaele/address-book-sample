import {Component, HostListener, Input, OnInit, Optional} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../service/user.service';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-user-address-book',
  templateUrl: './user-address-book.component.html',
  styleUrls: ['./user-address-book.component.scss']
})
export class UserAddressBookComponent implements OnInit {

  scopeUsers: User[] = [];
  @Input()
  selectedUsers: User[] = [];
  keyWord: string;

  constructor(private userService: UserService,
              @Optional() private modalRef: NzModalRef) {
  }

  ngOnInit(): void {
  }

  getUsersUnderOrg(selectedOrgId: string) {
    this.userService.getUsersByOrgId(selectedOrgId).subscribe(users => {
      this.scopeUsers = users;
    });
  }

  selectUser(user: User) {
    if (this.isSelected(user)) {
      this.selectedUsers = this.selectedUsers.filter($user => $user.userId !== user.userId);
    } else {
      this.selectedUsers.push(user);
    }
  }

  isSelected(user: User): boolean {
    return !!this.selectedUsers.find($user => $user.userId === user.userId);
  }

  addAll() {
    this.selectedUsers = [...this.scopeUsers];
  }

  @HostListener('document:keydown', ['$event'])
  searchUser(keyboardEvent?: KeyboardEvent) {
    if (this.notEnterEvent(keyboardEvent)) {
      return;
    }
    this.userService.searchUsersByKeyWord(this.keyWord).subscribe(users => {
      this.scopeUsers = users;
    });
  }

  private notEnterEvent(keyboardEvent: KeyboardEvent) {
    return keyboardEvent && keyboardEvent.key !== 'Enter';
  }

  submit() {
    this.modalRef.close(this.selectedUsers);
  }

  cancel() {
    this.modalRef.close(false);
  }
}
