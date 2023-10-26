package com.daniel.db_aed.entity.models;

import java.io.Serializable;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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

	@OneToOne
    @JoinColumn(name = "idpedido")
    private Pedidos pedido;

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

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Pedidos getPedido() {
		return pedido;
	}

	public void setPedido(Pedidos pedido) {
		this.pedido = pedido;
	}

	public Detalles(String producto, String cantidad, Pedidos pedido) {
		super();
		this.producto = producto;
		this.cantidad = cantidad;
		this.pedido = pedido;
	}

	public Detalles() {

	}
}
