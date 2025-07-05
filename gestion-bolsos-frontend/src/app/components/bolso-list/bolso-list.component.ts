// src/app/components/bolso-list/bolso-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Bolso, BolsoService } from '../../services/bolso.service';
// ¡ELIMINA ESTA LÍNEA DE IMPORTACIÓN!
// import { BolsoFormComponent } from '../bolso-form/bolso-form.component';

@Component({
  selector: 'app-bolso-list',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
    // ¡ELIMINA ESTO DE AQUÍ!
    // BolsoFormComponent
  ],
  templateUrl: './bolso-list.component.html',
  styleUrls: ['./bolso-list.component.css']
})
export class BolsoListComponent implements OnInit {
  bolsos: Bolso[] = [];
  selectedBolso: Bolso | null = null;

  constructor(private bolsoService: BolsoService) { }

  ngOnInit(): void {
    this.loadBolsos();
  }

  loadBolsos(): void {
    this.bolsoService.getBolsos().subscribe(
      data => {
        this.bolsos = data;
      },
      error => {
        console.error('Error al cargar bolsos:', error);
      }
    );
  }

  editBolso(bolso: Bolso): void {
    this.selectedBolso = { ...bolso };
  }

  deleteBolso(id?: number): void {
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que quieres eliminar este bolso?')) {
        this.bolsoService.deleteBolso(id).subscribe(
          () => {
            console.log('Bolso eliminado con éxito');
            this.loadBolsos();
          },
          error => {
            console.error('Error al eliminar bolso:', error);
          }
        );
      }
    }
  }

  clearSelection(): void {
    this.selectedBolso = null;
    this.loadBolsos();
  }
}