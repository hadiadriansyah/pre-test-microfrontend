import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

import { EntryService } from './entry.service'

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'micro-front-ends-dashboard-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],

})
export class RemoteEntryComponent implements OnInit {

  dataUsers : any
  columnTable = ['No', 'Name', 'Username', 'Email', 'Address', 'Phone', 'Website', 'Company', 'Action']
  titlePage = "List User"

  constructor(
    private _snackBar: MatSnackBar,
    private userService : EntryService
  ) { }

  ngOnInit(): void {
    this.getDataUsers();
  }

  getDataUsers() {
    this.userService.getDataUsers().subscribe(
      res => {
        this.dataUsers = res
      }
    )
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      res => {
        this._snackBar.open('Berhasil menghapus data', 'Tutup');
      }
    )
  }

}
