import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-person-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss'],
})
export class PersonModalComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<PersonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string },
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  closeDialog(): void {
    this.dialogRef.close(this.form.getRawValue());
  }

  private initForm(): void {
    if (!this.form) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        category: ['', Validators.required],
        company: ['', Validators.required],
        happiness: ['', Validators.required],
      });
    }
  }
}
