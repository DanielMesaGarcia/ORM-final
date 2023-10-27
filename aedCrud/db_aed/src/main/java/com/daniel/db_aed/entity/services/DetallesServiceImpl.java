package com.daniel.db_aed.entity.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.db_aed.entity.dao.IDetallesDao;
import com.daniel.db_aed.entity.models.Detalles;

@Service
public class DetallesServiceImpl implements IDetallesService{
	
	@Autowired
	private IDetallesDao detalleDao;
	
	@Override
	public Detalles get(long id) {
		return detalleDao.findById(id).get();
	}

	@Override
	public List<Detalles> getAll() {
		return (List<Detalles>) detalleDao.findAll();
	}

	@Override
	public void post(Detalles detalle) {
		detalleDao.save(detalle);
	}

	@Override
	public void put(Detalles detalle, long id) {
		detalleDao.findById(id).ifPresent((x)->{
			detalle.setId(id);
			detalleDao.save(detalle);
		});
	}

	@Override
	public void delete(long id) {
		detalleDao.deleteById(id);
	}
	
	
}