import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { delay, filter, finalize, map, tap } from 'rxjs';

import { PersonModalComponent } from '../person-modal';
import { SpinnerService, TableService } from 'src/app/services';
import { People } from 'src/app/data';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private loaderSrv: SpinnerService,
    private tableSrv: TableService
  ) {}

  ngOnInit(): void {}

  onClickOpenDialog(): void {
    const dialogNew = this.openDialog();

    dialogNew
      .afterClosed()
      .pipe(
        tap(() => this.loaderSrv.setLoading(true)),
        filter((value: any) => !!value),
        map((data) => {
          return {
            id: (People.length + 1).toString(),
            ...data,
          };
        }),
        delay(2000), //Added to show Spinner 2 sec
        finalize(() => this.loaderSrv.setLoading(false))
      )
      .subscribe((result: any) => {
        this.tableSrv.addHappyPerson(result);
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
