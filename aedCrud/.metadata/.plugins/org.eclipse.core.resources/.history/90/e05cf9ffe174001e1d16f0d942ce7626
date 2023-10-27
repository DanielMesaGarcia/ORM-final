package com.daniel.db_aed.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.daniel.db_aed.entity.models.Pedidos;
import com.daniel.db_aed.entity.services.IPedidosService;
@RestController
public class PedidosController {
	@Autowired
	IPedidosService pedidoService;
	
	@GetMapping("/pedidos")
	public List<Pedidos> getAllPedidos(){
		return pedidoService.getAll();
	}
	
	@PostMapping("/pedidos")
    public void post(Pedidos pedido) {
        pedidoService.post(pedido);
    }

    @PutMapping("/pedidos/{id}")
    public void put(Pedidos pedido, @PathVariable ( value = "id") long id) {
        pedidoService.put(pedido, id);
    }

    @DeleteMapping("/pedidos/{id}")
    public void delete(@PathVariable ( value = "id") long id) {
        pedidoService.delete(id);
    }
}