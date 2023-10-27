package com.daniel.db_aed.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.daniel.db_aed.entity.models.Detalles;
import com.daniel.db_aed.entity.services.IDetallesService;
@RestController
@CrossOrigin(origins = "*")
public class DetallesController {
	@Autowired
	IDetallesService detalleService;
	
	@GetMapping("/detalles")
	public List<Detalles> getAllDetalles(){
		return detalleService.getAll();
	}
	
	@PostMapping("/detalles")
    public void post(Detalles detalle) {
        detalleService.post(detalle);
    }

    @PutMapping("/detalles/{id}")
    public void put(Detalles detalle, @PathVariable ( value = "id") long id) {
        detalleService.put(detalle, id);
    }

    @DeleteMapping("/detalles/{id}")
    public void delete(@PathVariable ( value = "id") long id) {
        detalleService.delete(id);
    }
}