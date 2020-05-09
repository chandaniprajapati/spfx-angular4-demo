import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
@NgModule({
    declarations: [
        AppComponent,
        GroupsComponent,
        UsersComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
