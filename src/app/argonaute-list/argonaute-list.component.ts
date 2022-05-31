import { Component, OnInit } from '@angular/core';
import { Argonaute } from '../shared/model/argonaute.model';
import { ArgonauteService } from '../shared/service/argonaute.service';

@Component({
  selector: 'app-argonaute-list',
  templateUrl: './argonaute-list.component.html',
  styleUrls: ['./argonaute-list.component.scss'],
})
export class ArgonauteListComponent implements OnInit {
  argonautes: Argonaute[] | any;

  constructor(private argonauteService: ArgonauteService) {
    this.argonautes = [];
  }
  getArgonaute() {
    this.argonauteService.getArgonaute().subscribe({
      next: (argonautes: Argonaute[]) => {
        argonautes.forEach((argonaute) => {
          this.argonautes.push(argonaute);
        });
      },
    });
  }

  ngOnInit(): void {
    this.getArgonaute();
  }
}
