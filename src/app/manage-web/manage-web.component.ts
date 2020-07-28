import { Component, OnInit } from '@angular/core';
import { WebdesingService } from '../services/webdesing.service';
import { Webdesing } from '../models/webdesing';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-web',
  templateUrl: './manage-web.component.html',
  styleUrls: ['./manage-web.component.css']
})
export class ManageWebComponent implements OnInit {

  title = 'Manage Web';
  webdesings: Webdesing;
  error: string;

  categoryName: string;
  description: string;
  url: string;
  technology: string;

  constructor(private webdesingService: WebdesingService, private location: Location) { }

  ngOnInit() {
    this.webdesingService.getWebdesings().subscribe(
      (data: Webdesing) => this.webdesings = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.webdesingService.deleteWebdesing(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
