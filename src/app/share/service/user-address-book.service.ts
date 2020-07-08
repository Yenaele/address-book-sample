import {Injectable} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {Observable, Subject} from 'rxjs';
import {User} from '../../model/user';
import {UserAddressBookComponent} from '../user-address-book/user-address-book.component';

@Injectable()
export class UserAddressBookService {

  constructor(private modalService: NzModalService) {
  }

  public select(users: User[]): Observable<User[]> {
    const result = new Subject<User[]>();
    this.modalService.create({
      nzTitle: 'Select Users',
      nzContent: UserAddressBookComponent,
      nzWidth: '580px',
      nzMaskClosable: false,
      nzKeyboard: false,
      nzComponentParams: {
        selectedUsers: [...users]
      }
    }).afterClose.subscribe(res => {
      if (res) {
        result.next(res);
      } else {
        result.error(false);
      }
    });
    return result.asObservable();
  }
}
