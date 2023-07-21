import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditUserModel } from './edit-user-model';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(
    private httpClient: HttpClient
  ) { }
  httpOptions : any
  url = 'https://jsonplaceholder.typicode.com/users'

  getViewId(id : any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  editUser(oldData: any,  newData: EditUserModel) {
    const edit = {
      name: newData.name,
      username: newData.username,
      email: newData.email,
      editress: {
        street: newData.address,
        suite: oldData.suite,
        city: oldData.city,
        zipcode: oldData.zipcode,
        geo: {
          lat: oldData.lat,
          lng: oldData.lng
        }
      },
      phone: newData.phone,
      website: newData.website,
      company: {
        name: newData.company,
        catchPhrase: oldData.catchPhrase,
        bs: oldData.bs
      }
    }
    return this.httpClient.put(`${this.url}/${oldData.id}` , edit);
  }
}
