package com.daniel.db_aed.entity.services;

import java.util.List;
import com.daniel.db_aed.entity.models.Pedidos;

public interface IPedidosService {
	public Pedidos get(long id);
	public List<Pedidos> getAll();
	public void post(Pedidos pedido);
	public void put (Pedidos pedido, long id);
	public void delete(long id);
}
