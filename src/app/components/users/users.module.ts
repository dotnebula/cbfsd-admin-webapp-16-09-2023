import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UsersService } from 'src/app/services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ListusersComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers:[UsersService]
})
export class UsersModule { }
