import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { PersonModalComponent } from '../person-modal';
import { filter, finalize, takeUntil, tap, timer } from 'rxjs';
import { SpinnerService } from 'src/app/services';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private loaderSrv: SpinnerService) {}

  ngOnInit(): void {}

  onClickOpenDialog(): void {
    const dialogNew = this.openDialog();

    dialogNew.afterClosed().subscribe((result: any) => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  private openDialog(): MatDialogRef<PersonModalComponent> {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      data: {
        title: 'Happiness is on you',
      },
    });

    return dialogRef;
  }
}
