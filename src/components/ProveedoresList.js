import React from 'react';

const ProveedoresList = ({ proveedores, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map((proveedor) => (
          <tr key={proveedor.id}>
            <td>{proveedor.nombre}</td>
            <td>{proveedor.email}</td>
            <td>{proveedor.telefono}</td>
            <td>{proveedor.direccion}</td>
            <td>{proveedor.categoria}</td>
            <td>
              <button className="btn btn-warning me-2" onClick={() => onEdit(proveedor)}>
                Editar
              </button>
              <button className="btn btn-danger" onClick={() => onDelete(proveedor.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProveedoresList;