package com.daniel.db_aed.entity.models;

import java.io.Serializable;
import jakarta.persistence.Table;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "direcciones")
public class Direcciones implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String direccion;

    private String ciudad;

    @OneToOne
    @JoinColumn(name = "idusuario")
    private Usuarios usuario;

    
    
    public Direcciones(String direccion, String ciudad, Usuarios usuario) {
		super();
		this.direccion = direccion;
		this.ciudad = ciudad;
		this.usuario = usuario;
	}



	public Direcciones() {
		super();
    }



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getDireccion() {
		return direccion;
	}



	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}



	public String getCiudad() {
		return ciudad;
	}



	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}



	public Usuarios getUsuario() {
		return usuario;
	}



	public void setUsuario(Usuarios usuario) {
		this.usuario = usuario;
	}
	
	
	
}
