import { Component, OnInit } from '@angular/core';
import { VideofolioService } from '../services/videofolio.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';


@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {
  public Editor = ClassicEditor;

  pageTitle: string;
  error: string;
  uploadError: string;
  userId: number;

  videofolioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private videofolioService: VideofolioService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }




  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Video';
      this.videofolioService.getVideofolio(+id).subscribe(
        res => {
          this.videofolioForm.patchValue({
            title: res.title,
            description: res.description,
            url: res.url,
            technology: res.technology,
            isFeatured: res.isFeatured,
            isActive: res.isActive,
            id: res.id
          });
        }
      );
    } else {
      this.pageTitle = 'Create Video';
    }

    this.videofolioForm = this.fb.group({
      id: [''],
      title: ['' ],
      description: [''],
      popup: [''],
      url: [''],
      technology: [''],
      isFeatured: ['0'],
      isActive: ['1'],
    });

  }


  get title() { return this.videofolioForm.get('title'); }
  get description() { return this.videofolioForm.get('description'); }
  get url() { return this.videofolioForm.get('url'); }
  get technology() { return this.videofolioForm.get('technology'); }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.videofolioForm.get('title').value);
    formData.append('description', this.videofolioForm.get('description').value);
    formData.append('url', this.videofolioForm.get('url').value);
    formData.append('technology', this.videofolioForm.get('technology').value);
    formData.append('isFeatured', this.videofolioForm.get('isFeatured').value);
    formData.append('isActive', this.videofolioForm.get('isActive').value);

    const id = this.videofolioForm.get('id').value;

    if (id) {
      this.videofolioService.updateVideofolio(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/video']);
          }
        },
        error => this.error = error
      );
    } else {
      this.videofolioService.createVideofolio(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/video']);
          }
        },
        error => this.error = error
      );
    }
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }



}
