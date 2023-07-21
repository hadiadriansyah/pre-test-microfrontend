import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EditUserModel } from './edit-user-model'
import { EditUserService } from './edit-user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'micro-front-ends-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],

})
export class EditUserComponent implements OnInit {
  id : any
  titlePage = "Edit User"
  form = new EditUserModel
  dataView : any

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private _snackBar: MatSnackBar,
    private userService : EditUserService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getViewId()
  }

  getViewId() {
    this.userService.getViewId(this.id).subscribe(
      res => {
        
        this.dataView = res
        let data: any = {}
        data = res
        const newData: any = {
          name: data.name,
          username: data.username,
          email: data.email,
          address: data.address.street,
          phone: data.phone,
          website: data.website,
          company: data.company.name
        }
        this.form = newData
      }
    )
  }


  editUser() {
    this.userService.editUser(this.dataView, this.form).subscribe(
      res => {
        this._snackBar.open('Berhasil menyimpan data', 'Tutup');
      }
    )
  }


}
