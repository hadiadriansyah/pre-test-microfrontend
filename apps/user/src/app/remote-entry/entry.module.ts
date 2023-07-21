import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RemoteEntryComponent,
    NxWelcomeComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), MatButtonModule, MatSnackBarModule, FormsModule],
  providers: [],
})
export class RemoteEntryModule {}
