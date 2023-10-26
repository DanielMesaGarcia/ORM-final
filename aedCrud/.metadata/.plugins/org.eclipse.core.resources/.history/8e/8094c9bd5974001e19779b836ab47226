package com.daniel.db_aed.entity.models;

import java.io.Serializable;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "detalles")
public class Detalles implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String producto;

	private String cantidad;

	private long idpedido;

	public long getIdDetalles() {
		return id;
	}

	public void setIdDetalles(long id) {
		this.id = id;
	}

	public String getProducto() {
		return producto;
	}

	public void setProducto(String producto) {
		this.producto = producto;
	}

	public String getCantidad() {
		return cantidad;
	}

	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}

	public long getPedido() {
		return idpedido;
	}

	public void setPedido(long idpedido) {
		this.idpedido = idpedido;
	}

	public Detalles(String producto, String cantidad, long idpedido) {
		super();
		this.producto = producto;
		this.cantidad = cantidad;
		this.idpedido = idpedido;
	}

	public Detalles() {

	}
}
