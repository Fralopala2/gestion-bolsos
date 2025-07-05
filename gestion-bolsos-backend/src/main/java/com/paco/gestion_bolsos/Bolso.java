package com.paco.gestion_bolsos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data; // De Lombok, para getters, setters, etc.
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity // Indica que esta clase es una entidad de base de datos
@Data // Genera getters, setters, toString, equals y hashCode
@NoArgsConstructor // Genera un constructor sin argumentos
@AllArgsConstructor // Genera un constructor con todos los argumentos
public class Bolso {

    @Id // Marca este campo como la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Generación automática de ID
    private Long id;
    private String nombre;
    private String marca;
    private String color;
    private double precio;
    private int stock;

}