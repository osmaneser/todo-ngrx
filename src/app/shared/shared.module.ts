import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { ImportancePipe } from './pipes/getEnumValue';
import { AssignmentPipe } from './pipes/getAssignmentValue';



@NgModule({
  declarations: [DialogComponent, ImportancePipe, AssignmentPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,

  ],
  exports:[
    ReactiveFormsModule,

    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,

    ImportancePipe,
    AssignmentPipe
  ]
})
export class SharedModule { }
