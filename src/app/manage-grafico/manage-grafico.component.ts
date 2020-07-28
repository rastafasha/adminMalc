import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../services/grafico.service';
import { Grafico } from '../models/grafico';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-grafico',
  templateUrl: './manage-grafico.component.html',
  styleUrls: ['./manage-grafico.component.css']
})
export class ManageGraficoComponent implements OnInit {

  title = 'Manage Grafico';
  graficos: Grafico;
  error: string;

  categoryName: string;
  description: string;
  url: string;
  technology: string;

  constructor(private graficoService: GraficoService, private location: Location) { }

  ngOnInit() {
    this.graficoService.getGraficos().subscribe(
      (data: Grafico) => this.graficos = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.graficoService.deleteGrafico(+id).subscribe(
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
