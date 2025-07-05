import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // <-- Asegúrate de que NgForm esté aquí

import { Bolso, BolsoService } from '../../services/bolso.service';

@Component({
  selector: 'app-bolso-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // <-- Asegúrate de que FormsModule esté aquí
  ],
  templateUrl: './bolso-form.component.html',
  styleUrls: ['./bolso-form.component.css']
})
export class BolsoFormComponent implements OnChanges {
  @Input() bolso: Bolso | null = null;
  @Output() bolsoSaved = new EventEmitter<void>();

  // Esto es crucial para acceder al formulario en el TS
  @ViewChild('bolsoForm') form!: NgForm; // <-- Añade esta línea

  currentBolso: Bolso = {
    nombre: '',
    marca: '',
    color: '',
    precio: 0,
    stock: 0
  };

  constructor(private bolsoService: BolsoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bolso'] && changes['bolso'].currentValue) {
      this.currentBolso = { ...changes['bolso'].currentValue };
      // Actualiza la validez si el formulario ya está disponible
      if (this.form) {
        // Usa setTimeout para dar un ciclo de digestión a Angular
        // Esto asegura que los valores de NgModel se hayan propagado antes de validar
        setTimeout(() => this.form.control.updateValueAndValidity(), 0);
      }
    } else {
      this.resetForm();
    }
  }

  onSubmit(): void {
    // Aquí puedes añadir un console.log para ver el estado del formulario justo antes de enviar
    console.log('Estado del formulario al enviar:', this.form.form.valid);
    console.log('Errores de nombre:', this.form.form.controls['nombre'].errors);
    console.log('Errores de marca:', this.form.form.controls['marca'].errors);
    console.log('Errores de color:', this.form.form.controls['color'].errors);


    if (this.form.form.valid) { // <-- Confirma que esta línea es correcta
      if (this.currentBolso.id) {
        this.bolsoService.updateBolso(this.currentBolso.id, this.currentBolso).subscribe(
          () => {
            console.log('Bolso actualizado con éxito');
            this.bolsoSaved.emit();
            this.resetForm();
          },
          error => {
            console.error('Error al actualizar bolso:', error);
          }
        );
      } else {
        this.bolsoService.addBolso(this.currentBolso).subscribe(
          () => {
            console.log('Bolso añadido con éxito');
            this.bolsoSaved.emit();
            this.resetForm();
          },
          error => {
            console.error('Error al añadir bolso:', error);
          }
        );
      }
    } else {
      console.warn('El formulario no es válido. No se puede enviar el bolso.');
      // Opcional: Marcar todos los campos como "touched" para mostrar los errores de validación al usuario
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  resetForm(): void {
    this.currentBolso = {
      nombre: '',
      marca: '',
      color: '',
      precio: 0,
      stock: 0
    };
    // Restablece el estado del formulario NgForm
    if (this.form) {
      // Uso setTimeout para dar tiempo a que NgModel limpie los valores
      setTimeout(() => this.form.resetForm(), 0);
    }
  }
}