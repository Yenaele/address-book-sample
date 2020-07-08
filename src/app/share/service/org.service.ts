import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NzTreeNodeOptions} from 'ng-zorro-antd';
import {Organization} from '../../model/organization';

@Injectable()
export class OrgService {

  constructor(private http: HttpClient) {
  }

  getRootOrg(): NzTreeNodeOptions {
    return {title: '巨力集团', key: '100001'};
  }

  loadChildren(parentKey: string): Observable<NzTreeNodeOptions[]> {
    return this.http.get<Organization[]>(`/identity-server/organization/child/${parentKey}`)
      .pipe(
        map(res => this.mapOrgToTreeNode(res))
      );
  }

  private mapOrgToTreeNode(res: Organization[]): NzTreeNodeOptions[] {
    return res.map(org => ({
      title: org.name,
      key: org.orgId
    }));
  }
}
