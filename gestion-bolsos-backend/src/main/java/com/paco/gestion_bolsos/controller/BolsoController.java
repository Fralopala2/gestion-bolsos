package com.paco.gestion_bolsos.controller;

import com.paco.gestion_bolsos.Bolso;
import com.paco.gestion_bolsos.service.BolsoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // Indica que esta clase es un controlador REST
@RequestMapping("/api/bolsos") // Prefijo para todas las rutas de este controlador
@CrossOrigin(origins = "http://localhost:4200") // Permite peticiones desde el frontend (ej. Angular/React en 4200)
public class BolsoController {

    @Autowired
    private BolsoService bolsoService;

    // GET http://localhost:8080/api/bolsos
    @GetMapping
    public List<Bolso> getAllBolsos() {
        return bolsoService.getAllBolsos();
    }

    // GET http://localhost:8080/api/bolsos/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Bolso> getBolsoById(@PathVariable Long id) {
        Optional<Bolso> bolso = bolsoService.getBolsoById(id);
        return bolso.map(ResponseEntity::ok) // Si existe, devuelve 200 OK
                     .orElseGet(() -> ResponseEntity.notFound().build()); // Si no, devuelve 404 Not Found
    }

    // POST http://localhost:8080/api/bolsos
    @PostMapping
    public ResponseEntity<Bolso> createBolso(@RequestBody Bolso bolso) {
        Bolso newBolso = bolsoService.saveBolso(bolso);
        return new ResponseEntity<>(newBolso, HttpStatus.CREATED); // Devuelve 201 Created
    }

    // PUT http://localhost:8080/api/bolsos/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Bolso> updateBolso(@PathVariable Long id, @RequestBody Bolso bolsoDetails) {
        return bolsoService.getBolsoById(id)
                .map(bolso -> {
                    bolso.setNombre(bolsoDetails.getNombre());
                    bolso.setMarca(bolsoDetails.getMarca());
                    bolso.setColor(bolsoDetails.getColor());
                    bolso.setPrecio(bolsoDetails.getPrecio());
                    bolso.setStock(bolsoDetails.getStock());
                    Bolso updatedBolso = bolsoService.saveBolso(bolso);
                    return ResponseEntity.ok(updatedBolso);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE http://localhost:8080/api/bolsos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBolso(@PathVariable Long id) {
        if (bolsoService.getBolsoById(id).isPresent()) {
            bolsoService.deleteBolso(id);
            return ResponseEntity.noContent().build(); // Devuelve 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // Devuelve 404 Not Found
        }
    }
}