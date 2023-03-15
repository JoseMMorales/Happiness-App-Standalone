import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerService } from 'src/app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: ` <ng-container *ngIf="isLoading">
    <mat-spinner></mat-spinner>
  </ng-container>`,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  subscription!: Subscription;

  @HostBinding('class.visible') isVisible = false;

  constructor(private loader: SpinnerService) {}

  ngOnInit(): void {
    this.subscription = this.loader.settingObservable$.subscribe((value) => {
      this.isVisible = value;
      this.isLoading = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
