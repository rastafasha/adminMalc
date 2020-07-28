import { Component, OnInit } from '@angular/core';
import { WebdesingService } from '../services/webdesing.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';

@Component({
  selector: 'app-web-form',
  templateUrl: './web-form.component.html',
  styleUrls: ['./web-form.component.css']
})
export class WebFormComponent implements OnInit {

  public Editor = ClassicEditor;

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  userId: number;

  webdesingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private webdesingService: WebdesingService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }




  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Proyects Web';
      this.webdesingService.getWebdesing(+id).subscribe(
        res => {
          this.webdesingForm.patchValue({
            title: res.title,
            description: res.description,
            clasName: res.clasName,
            popup: res.popup,
            url: res.url,
            technology: res.technology,
            isFeatured: res.isFeatured,
            isActive: res.isActive,
            id: res.id
          });
          this.imagePath = res.image;
        }
      );
    } else {
      this.pageTitle = 'Create webdesing';
    }

    this.webdesingForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      clasName: [''],
      popup: [''],
      url: [''],
      technology: [''],
      isFeatured: ['0'],
      isActive: ['1'],
      image: [''],
    });

  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.webdesingForm.get('image').setValue(file);
    }
  }

  get title() { return this.webdesingForm.get('title'); }
  get description() { return this.webdesingForm.get('description'); }
  get clasName() { return this.webdesingForm.get('clasName'); }
  get popup() { return this.webdesingForm.get('popup'); }
  get url() { return this.webdesingForm.get('url'); }
  get technology() { return this.webdesingForm.get('technology'); }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.webdesingForm.get('title').value);
    formData.append('description', this.webdesingForm.get('description').value);
    formData.append('clasName', this.webdesingForm.get('clasName').value);
    formData.append('popup', this.webdesingForm.get('popup').value);
    formData.append('url', this.webdesingForm.get('url').value);
    formData.append('technology', this.webdesingForm.get('technology').value);
    formData.append('isFeatured', this.webdesingForm.get('isFeatured').value);
    formData.append('isActive', this.webdesingForm.get('isActive').value);
    formData.append('image', this.webdesingForm.get('image').value);

    const id = this.webdesingForm.get('id').value;

    if (id) {
      this.webdesingService.updateWebdesing(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/webdesing']);
          }
        },
        error => this.error = error
      );
    } else {
      this.webdesingService.createWebdesing(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/webdesing']);
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
