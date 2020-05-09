import { Component, OnInit } from '@angular/core';
import * as pnp from 'sp-pnp-js';
@Component({
  selector: 'app-users',
  template: require('./users.component.html')
})
export class UsersComponent implements OnInit {
  public title = 'Hello User';
  public count = 0;
  public users: any = [];
  public ngOnInit() {
    this.users = [];
    pnp.sp.web.siteUsers
      .select("Id,Title")
      .get()
      .then(u => {
        this.users = u;
      });
  }
}
