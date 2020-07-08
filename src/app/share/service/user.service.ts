import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsersByOrgId(selectedOrgId: string): Observable<User[]> {
    return this.http.get<User[]>(`/identity-server/user/orgId/${selectedOrgId}`);
  }

  searchUsersByKeyWord(keyWord: string) {
    return this.http.get<User[]>('/identity-server/user/search', {
      params: {
        keyWord
      }
    });
  }
}
