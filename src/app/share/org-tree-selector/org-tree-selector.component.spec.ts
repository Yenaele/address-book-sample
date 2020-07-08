import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgTreeSelectorComponent} from './org-tree-selector.component';

describe('OrgTreeSelectorComponent', () => {
  let component: OrgTreeSelectorComponent;
  let fixture: ComponentFixture<OrgTreeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrgTreeSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTreeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
