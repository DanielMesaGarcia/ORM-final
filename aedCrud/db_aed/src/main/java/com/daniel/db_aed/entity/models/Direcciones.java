package com.daniel.db_aed.entity.models;

import java.io.Serializable;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "direcciones")
public class Direcciones implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String direccion;

    private String ciudad;

    private long idusuario;

    public Direcciones(String direccion, String ciudad, long idusuario) {
        super();
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.idusuario = idusuario;
    }

    // Getters y Setters

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

    public long getusuario() {
        return idusuario;
    }

    public void setUsuario(long idusuario) {
        this.idusuario = idusuario;
    }

    public Direcciones() {

    }
}
