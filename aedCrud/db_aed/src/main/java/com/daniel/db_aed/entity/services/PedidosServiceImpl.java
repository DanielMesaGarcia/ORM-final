package com.daniel.db_aed.entity.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.db_aed.entity.dao.IPedidosDao;
import com.daniel.db_aed.entity.models.Pedidos;

@Service
public class PedidosServiceImpl implements IPedidosService{
	
	@Autowired
	private IPedidosDao pedidoDao;
	
	@Override
	public Pedidos get(long id) {
		return pedidoDao.findById(id).get();
	}

	@Override
	public List<Pedidos> getAll() {
		return (List<Pedidos>) pedidoDao.findAll();
	}

	@Override
	public void post(Pedidos pedido) {
		pedidoDao.save(pedido);
	}

	@Override
	public void put(Pedidos pedido, long id) {
		pedidoDao.findById(id).ifPresent((x)->{
			pedido.setId(id);
			pedidoDao.save(pedido);
		});
	}

	@Override
	public void delete(long id) {
		pedidoDao.deleteById(id);
	}
	
	
}