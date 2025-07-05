package com.paco.gestion_bolsos.service;

import com.paco.gestion_bolsos.Bolso;
import com.paco.gestion_bolsos.repository.BolsoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // Indica que esta clase es un componente de servicio
public class BolsoService {

    @Autowired // Inyecta una instancia de BolsoRepository
    private BolsoRepository bolsoRepository;

    // Obtener todos los bolsos
    public List<Bolso> getAllBolsos() {
        return bolsoRepository.findAll();
    }

    // Obtener un bolso por ID
    public Optional<Bolso> getBolsoById(Long id) {
        return bolsoRepository.findById(id);
    }

    // Guardar/actualizar un bolso
    public Bolso saveBolso(Bolso bolso) {
        return bolsoRepository.save(bolso);
    }

    // Eliminar un bolso por ID
    public void deleteBolso(Long id) {
        bolsoRepository.deleteById(id);
    }
}