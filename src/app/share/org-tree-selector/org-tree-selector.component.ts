import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions} from 'ng-zorro-antd';
import {OrgService} from '../service/org.service';

@Component({
  selector: 'app-org-tree-selector',
  templateUrl: './org-tree-selector.component.html',
  styleUrls: ['./org-tree-selector.component.scss']
})
export class OrgTreeSelectorComponent implements OnInit {

  treeData: NzTreeNodeOptions[] = [];

  @Output() checkOrg: EventEmitter<string> = new EventEmitter<string>();

  constructor(private orgService: OrgService) {
  }

  ngOnInit(): void {
    this.treeData = [this.orgService.getRootOrg()];
  }

  queryNodeChild(event: NzFormatEmitEvent) {
    const node = event.node;
    if (this.nodeMaybeLeafAndExpanded(node)) {
      this.orgService.loadChildren(node.key).subscribe(child => {
        node.addChildren(child);
        if (!child || child.length === 0) {
          node.isLeaf = true;
        }
      });
    }
  }

  private nodeMaybeLeafAndExpanded(node: NzTreeNode) {
    return node && node.getChildren().length === 0 && node.isExpanded;
  }

  searchUserByOrg(event: NzFormatEmitEvent) {
    this.checkOrg.emit(event.node.key);
  }
}
