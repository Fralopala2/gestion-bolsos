// src/app/app.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core'; // Añade ViewChild y AfterViewInit
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BolsoListComponent } from './components/bolso-list/bolso-list.component';
import { BolsoFormComponent } from './components/bolso-form/bolso-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BolsoListComponent,
    BolsoFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit { // Implementa AfterViewInit
  title = 'Gestión de Bolsos';

  @ViewChild(BolsoFormComponent) bolsoFormComp!: BolsoFormComponent; // Referencia al componente hijo

  ngAfterViewInit(): void {
    // Esto se ejecutará después de que la vista y los componentes hijos se hayan inicializado.
    // Puedes poner un console.log aquí para confirmar que bolsoFormComp está disponible.
    // console.log('Bolso Form Component:', this.bolsoFormComp);
  }
}