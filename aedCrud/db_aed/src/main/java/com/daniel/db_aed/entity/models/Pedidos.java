package com.daniel.db_aed.entity.models;

import java.io.Serializable;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "Pedidos")
public class Pedidos implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String estado;

    private String fecha;

    @OneToOne
    @JoinColumn(name = "idusuario")
    private Usuarios usuario;

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Usuarios getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuarios usuario) {
		this.usuario = usuario;
	}

	public Pedidos(String estado, String fecha, Usuarios usuario) {
		super();
		this.estado = estado;
		this.fecha = fecha;
		this.usuario = usuario;
	}

	public Pedidos() {

    }
}
