package com.paco.gestion_bolsos.repository;

import com.paco.gestion_bolsos.Bolso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Indica que esta interfaz es un componente de repositorio
public interface BolsoRepository extends JpaRepository<Bolso, Long> {
    // JpaRepository nos da métodos CRUD (Create, Read, Update, Delete)
    // El primer parámetro es el tipo de la entidad, el segundo es el tipo de su ID.

    // Puedes añadir métodos personalizados si los necesitas,
    // por ejemplo: List<Bolso> findByMarca(String marca);
}