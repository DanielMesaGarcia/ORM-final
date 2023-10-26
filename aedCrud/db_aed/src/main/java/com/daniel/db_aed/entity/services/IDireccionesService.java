package com.daniel.db_aed.entity.services;

import java.util.List;
import com.daniel.db_aed.entity.models.Direcciones;

public interface IDireccionesService {
	public Direcciones get(long id);
	public List<Direcciones> getAll();
	public void post(Direcciones direccion);
	public void put (Direcciones direccion, long id);
	public void delete(long id);
}
