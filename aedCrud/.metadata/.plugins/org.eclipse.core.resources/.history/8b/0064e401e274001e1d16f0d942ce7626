package com.daniel.db_aed.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.daniel.db_aed.entity.models.Direcciones;
import com.daniel.db_aed.entity.services.IDireccionesService;
@RestController
public class DireccionesController {
	@Autowired
	IDireccionesService direccionService;
	
	@GetMapping("/direcciones")
	public List<Direcciones> getAllDireccioness(){
		return direccionService.getAll();
	}
	
	@PostMapping("/direcciones")
    public void post(Direcciones direccion) {
        direccionService.post(direccion);
    }

    @PutMapping("/direcciones/{id}")
    public void put(Direcciones direccion, @PathVariable ( value = "id") long id) {
        direccionService.put(direccion, id);
    }

    @DeleteMapping("/direcciones/{id}")
    public void delete(@PathVariable ( value = "id") long id) {
        direccionService.delete(id);
    }
}