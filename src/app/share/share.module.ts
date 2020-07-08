import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrgTreeSelectorComponent} from './org-tree-selector/org-tree-selector.component';
import {UserAddressBookComponent} from './user-address-book/user-address-book.component';
import {FormsModule} from '@angular/forms';
import {NzButtonModule, NzIconModule, NzInputModule, NzModalModule, NzModalService, NzSelectModule, NzTreeModule} from 'ng-zorro-antd';
import {UserService} from './service/user.service';
import {OrgService} from './service/org.service';
import {UserAddressBookService} from './service/user-address-book.service';
import {UserSelectorComponent} from './user-selector/user-selector.component';


@NgModule({
  declarations: [
    OrgTreeSelectorComponent,
    UserAddressBookComponent,
    UserSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTreeModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzModalModule,
    NzButtonModule,
  ],
  exports: [
    OrgTreeSelectorComponent,
    UserAddressBookComponent,
    UserSelectorComponent
  ],
  providers: [
    UserService,
    OrgService,
    NzModalService,
    UserAddressBookService
  ]
})
export class ShareModule {
}
