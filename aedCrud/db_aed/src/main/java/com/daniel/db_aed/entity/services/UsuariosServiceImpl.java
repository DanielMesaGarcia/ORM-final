package com.daniel.db_aed.entity.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.db_aed.entity.dao.IUsuariosDao;
import com.daniel.db_aed.entity.models.Usuarios;

@Service
public class UsuariosServiceImpl implements IUsuariosService{
	
	@Autowired
	private IUsuariosDao usuarioDao;
	
	@Override
	public Usuarios get(long id) {
		return usuarioDao.findById(id).get();
	}

	@Override
	public List<Usuarios> getAll() {
		return (List<Usuarios>) usuarioDao.findAll();
	}

	@Override
	public void post(Usuarios usuario) {
		usuarioDao.save(usuario);
	}

	@Override
	public void put(Usuarios usuario, long id) {
		usuarioDao.findById(id).ifPresent((x)->{
			usuario.setId(id);
			usuarioDao.save(usuario);
		});
	}

	@Override
	public void delete(long id) {
		usuarioDao.deleteById(id);
	}
	
	
}
