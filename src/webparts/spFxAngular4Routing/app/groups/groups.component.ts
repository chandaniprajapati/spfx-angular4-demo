import { Component, OnInit } from '@angular/core';
import * as pnp from 'sp-pnp-js';
@Component({
  selector: 'app-groups',
  template: require('./groups.component.html')
})
export class GroupsComponent implements OnInit {
  public groups: any = [];
  public ngOnInit() {
    this.groups = [];
    pnp.sp.web.siteGroups
      .select("Id,Title,OwnerTitle")
      .get()
      .then(g => {
        this.groups = g;
      });
  }
}
