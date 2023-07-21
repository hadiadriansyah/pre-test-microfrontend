import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'user-add', component: AddUserComponent
  },
  {
    path: 'user-edit/:id', component: EditUserComponent
  }

];
