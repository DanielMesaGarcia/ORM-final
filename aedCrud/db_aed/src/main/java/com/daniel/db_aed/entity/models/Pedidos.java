package com.daniel.db_aed.entity.models;

import java.io.Serializable;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name = "Pedidos")
public class Pedidos implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String estado;

    private String fecha;

    private long idusuario;

    public long getIdPedidos() {
        return id;
    }

    public void setIdPedidos(long id) {
        this.id = id;
    }

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

    public long getIdUsuario() {
        return idusuario;
    }

    public void setUsuario(long idusuario) {
        this.idusuario = idusuario;
    }

    public Pedidos(String estado, String fecha, long idusuario) {
        super();
        this.estado = estado;
        this.fecha = fecha;
        this.idusuario = idusuario;
    }

    public Pedidos() {

    }
}
