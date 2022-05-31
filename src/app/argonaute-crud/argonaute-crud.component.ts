import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Argonaute } from '../shared/model/argonaute.model';
import { ArgonauteService } from '../shared/service/argonaute.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-argonaute-crud',
  templateUrl: './argonaute-crud.component.html',
  styleUrls: ['./argonaute-crud.component.scss'],
})
export class ArgonauteCrudComponent implements OnInit {
  argonaute: Argonaute | undefined;
  argonauteForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private argonauteService: ArgonauteService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (this.data != undefined) {
      this.argonauteService.getArgonauteById(this.data.id).subscribe({
        next: (argonaute: Argonaute) => {
          this.argonaute = argonaute;
          this.argonauteForm = this.fb.group({
            name: [
              this.argonaute.name,
              [Validators.required, Validators.maxLength(100)],
            ],
          });
        },
        error: () => {
          alert('Erreur de chargement');
        },
      });
    }
  }
  onSubmitForm() {
    if (this.argonauteForm.valid) {
      if (this.argonaute != undefined) {
        this.argonauteService
          .putArgonaute(this.argonaute.id, this.argonauteForm.value)
          .subscribe({
            next: () => {
              this.route.navigate(['/dashboard']);
            },
          });
      } else {
        this.argonauteService
          .postArgonaute(this.argonauteForm.value)
          .subscribe({
            next: () => {
              this.route.navigate(['/dashboard']);
            },
          });
      }
    }
  }
}
