import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

import { People, DisplayedColumns } from 'src/app/data';
import { Person } from 'src/app/models';
import { TableService } from 'src/app/services';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    DragDropModule,
  ],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss'],
})
export class PeopleTableComponent implements OnInit, AfterViewInit, OnDestroy {
  dataSource!: MatTableDataSource<Person>;
  displayedColumns: string[] = [];
  subscription!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private tableSrv: TableService
  ) {
    this.displayedColumns = DisplayedColumns;
    this.dataSource = new MatTableDataSource(People);
  }

  ngOnInit(): void {
    this.updateHappinessList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.paginator && this.dataSource.paginator.firstPage();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any): void {
    sortState.direction
      ? this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
      : this._liveAnnouncer.announce('Sorting cleared');
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  private updateHappinessList(): void {
    this.subscription = this.tableSrv.happyPeople$.subscribe((people) => {
      if (people.length > 0) {
        this.dataSource = new MatTableDataSource(people);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
