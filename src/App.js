import React, { useState, useEffect } from 'react';
import { getProveedores, saveProveedores } from './utils/storage';
import ProveedoresForm from './components/ProveedoresForm';
import ProveedoresList from './components/ProveedoresList';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [proveedores, setProveedores] = useState([]);
  const [editingProveedor, setEditingProveedor] = useState(null);

  useEffect(() => {
    setProveedores(getProveedores());
  }, []);

  const saveProveedor = (proveedor) => {
    if (proveedor.id) {
      const updatedProveedores = proveedores.map((p) =>
        p.id === proveedor.id ? proveedor : p
      );
      setProveedores(updatedProveedores);
      saveProveedores(updatedProveedores);
      toast.success('Proveedor actualizado correctamente.');
    } else {
      const newProveedor = { ...proveedor, id: Date.now() };
      const updatedProveedores = [...proveedores, newProveedor];
      setProveedores(updatedProveedores);
      saveProveedores(updatedProveedores);
      toast.success('Proveedor agregado correctamente.');
    }
    setEditingProveedor(null);
  };
  

  const deleteProveedor = (id) => {
    const updatedProveedores = proveedores.filter((p) => p.id !== id);
    setProveedores(updatedProveedores);
    saveProveedores(updatedProveedores);
    toast.success('Proveedor eliminado correctamente.');
  };

  const editProveedor = (proveedor) => {
    setEditingProveedor(proveedor);
  };

  return (
    <div className="container mt-5">
      <h1>Gestión de Proveedores</h1>
      <ProveedoresForm onSave={saveProveedor} editingProveedor={editingProveedor} />
      <ProveedoresList
        proveedores={proveedores}
        onEdit={editProveedor}
        onDelete={deleteProveedor}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
