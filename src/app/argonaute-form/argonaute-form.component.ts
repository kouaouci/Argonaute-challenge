import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Argonaute } from '../shared/model/argonaute.model';
import { ArgonauteService } from '../shared/service/argonaute.service';
import { ArgonauteCrudComponent } from '../argonaute-crud/argonaute-crud.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-argonaute-form',
  templateUrl: './argonaute-form.component.html',
  styleUrls: ['./argonaute-form.component.scss'],
})
export class ArgonauteFormComponent implements OnInit {
  argonautes: Argonaute[] | undefined;

  constructor(
    private argonauteService: ArgonauteService,
    private dialog: MatDialog
  ) {
    this.argonautes = [];
  }

  ngOnInit(): void {
    this.getArgonaute();
  }

  getArgonaute() {
    this.argonauteService.getArgonaute().subscribe({
      next: (argonautes: Argonaute[]) => {
        this.argonautes = argonautes;
      },
    });
  }

  refreshAfterClose() {
    this.dialog.afterAllClosed.subscribe({
      next: () => {
        this.getArgonaute();
      },
    });
  }

  openUpdateForm(id: number) {
    this.dialog.open(ArgonauteCrudComponent, {
      data: {
        id: id,
      },
    });
    this.refreshAfterClose();
  }

  openCreatedForm() {
    this.dialog.open(ArgonauteCrudComponent);
    this.refreshAfterClose();
  }

  deleteArgonaute(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet Argonaute ?')) {
      this.argonauteService.deleteArgonaute(id).subscribe({
        next: () => {
          this.getArgonaute();
        },
        error: () => {
          alert('Erreur de suppression');
        },
      });
    }
  }
}
