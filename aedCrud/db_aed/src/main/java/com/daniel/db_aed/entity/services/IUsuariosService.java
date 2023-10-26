package com.daniel.db_aed.entity.services;

import java.util.List;
import com.daniel.db_aed.entity.models.Usuarios;

public interface IUsuariosService {
	public Usuarios get(long id);
	public List<Usuarios> getAll();
	public void post(Usuarios usuario);
	public void put (Usuarios usuario, long id);
	public void delete(long id);
}
