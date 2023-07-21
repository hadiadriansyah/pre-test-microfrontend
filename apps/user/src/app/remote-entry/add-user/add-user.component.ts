import { Component, OnInit } from '@angular/core';

import { AddUserModel } from './add-user-model'
import { AddUserService } from './add-user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'micro-front-ends-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],

})
export class AddUserComponent {

  titlePage = "Add User"
  form = new AddUserModel

  constructor(
    private _snackBar: MatSnackBar,
    private userService : AddUserService
  ) { }


  addUser() {
    this.userService.addUser(this.form).subscribe(
      res => {
        this._snackBar.open('Berhasil menambah data', 'Tutup');
      }
    )
  }


}
