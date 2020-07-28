import { Component, OnInit } from '@angular/core';
import { VideofolioService } from '../services/videofolio.service';
import { Videofolio } from '../models/videofolio';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.css']
})
export class ManageVideoComponent implements OnInit {

  title = 'Manage Video';
  videofolios: Videofolio;
  error: string;

  categoryId: number;
    description: string;
    url: string;
    technology: string;

  constructor(private videofolioService: VideofolioService, private location: Location) { }

  ngOnInit() {
    this.videofolioService.getVideofolios().subscribe(
      (data: Videofolio) => this.videofolios = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.videofolioService.deleteVideofolio(+id).subscribe(
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
