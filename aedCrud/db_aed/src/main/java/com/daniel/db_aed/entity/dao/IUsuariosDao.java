package com.daniel.db_aed.entity.dao;
import org.springframework.data.repository.CrudRepository;

import com.daniel.db_aed.entity.models.Usuarios;
public interface IUsuariosDao extends CrudRepository<Usuarios, Long>{

}
