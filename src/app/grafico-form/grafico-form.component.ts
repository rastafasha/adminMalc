import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../services/grafico.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';

@Component({
  selector: 'app-grafico-form',
  templateUrl: './grafico-form.component.html',
  styleUrls: ['./grafico-form.component.css']
})
export class GraficoFormComponent implements OnInit {

  public Editor = ClassicEditor;

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  userId: number;

  graficoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private graficoService: GraficoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }




  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Proyects Web';
      this.graficoService.getGrafico(+id).subscribe(
        res => {
          this.graficoForm.patchValue({
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

    this.graficoForm = this.fb.group({
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
      this.graficoForm.get('image').setValue(file);
    }
  }

  get title() { return this.graficoForm.get('title'); }
  get description() { return this.graficoForm.get('description'); }
  get clasName() { return this.graficoForm.get('clasName'); }
  get popup() { return this.graficoForm.get('popup'); }
  get url() { return this.graficoForm.get('url'); }
  get technology() { return this.graficoForm.get('technology'); }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.graficoForm.get('title').value);
    formData.append('description', this.graficoForm.get('description').value);
    formData.append('clasName', this.graficoForm.get('clasName').value);
    formData.append('popup', this.graficoForm.get('popup').value);
    formData.append('url', this.graficoForm.get('url').value);
    formData.append('technology', this.graficoForm.get('technology').value);
    formData.append('isFeatured', this.graficoForm.get('isFeatured').value);
    formData.append('isActive', this.graficoForm.get('isActive').value);
    formData.append('image', this.graficoForm.get('image').value);

    const id = this.graficoForm.get('id').value;

    if (id) {
      this.graficoService.updateGrafico(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/grafico']);
          }
        },
        error => this.error = error
      );
    } else {
      this.graficoService.createGrafico(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/grafico']);
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
