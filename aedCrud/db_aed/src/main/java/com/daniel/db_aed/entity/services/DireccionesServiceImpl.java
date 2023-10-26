package com.daniel.db_aed.entity.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.db_aed.entity.dao.IDireccionesDao;
import com.daniel.db_aed.entity.models.Direcciones;

@Service
public class DireccionesServiceImpl implements IDireccionesService{
	
	@Autowired
	private IDireccionesDao direccionDao;
	
	@Override
	public Direcciones get(long id) {
		return direccionDao.findById(id).get();
	}

	@Override
	public List<Direcciones> getAll() {
	    return (List<Direcciones>) direccionDao.findAll();
	}


	@Override
	public void post(Direcciones direccion) {
		direccionDao.save(direccion);
	}

	@Override
	public void put(Direcciones direccion, long id) {
		direccionDao.findById(id).ifPresent((x)->{
			direccion.setId(id);
			direccionDao.save(direccion);
		});
	}

	@Override
	public void delete(long id) {
		direccionDao.deleteById(id);
	}
}