import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bolso {
  id?: number; // El ID es opcional al crear uno nuevo
  nombre: string;
  marca: string;
  color: string;
  precio: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class BolsoService {
  private apiUrl = 'http://localhost:8080/api/bolsos'; // URL de tu backend Spring Boot

  constructor(private http: HttpClient) { }

  getBolsos(): Observable<Bolso[]> {
    return this.http.get<Bolso[]>(this.apiUrl);
  }

  getBolso(id: number): Observable<Bolso> {
    return this.http.get<Bolso>(`${this.apiUrl}/${id}`);
  }

  addBolso(bolso: Bolso): Observable<Bolso> {
    return this.http.post<Bolso>(this.apiUrl, bolso);
  }

  updateBolso(id: number, bolso: Bolso): Observable<Bolso> {
    return this.http.put<Bolso>(`${this.apiUrl}/${id}`, bolso);
  }

  deleteBolso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}