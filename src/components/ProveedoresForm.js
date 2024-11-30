import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const ProveedoresForm = ({ onSave, editingProveedor }) => {
  const [formData, setFormData] = useState({
    id: null,
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    categoria: '',
  });

  // useEffect para cargar datos del proveedor seleccionado al editar
  useEffect(() => {
    if (editingProveedor) {
      setFormData(editingProveedor);
    }
  }, [editingProveedor]);

  // Manejo de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.categoria) {
      toast.error('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Guardar o actualizar proveedor
    onSave(formData);

    // Limpiar el formulario
    setFormData({
      id: null,
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
      categoria: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input
          type="text"
          className="form-control"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Dirección</label>
        <input
          type="text"
          className="form-control"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <input
          type="text"
          className="form-control"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {formData.id ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
  );
};

export default ProveedoresForm;
