package com.daniel.db_aed.entity.services;

import java.util.List;
import com.daniel.db_aed.entity.models.Detalles;

public interface IDetallesService {
	public Detalles get(long id);
	public List<Detalles> getAll();
	public void post(Detalles detalle);
	public void put (Detalles detalle, long id);
	public void delete(long id);
}
