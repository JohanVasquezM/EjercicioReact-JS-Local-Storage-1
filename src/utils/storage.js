export const getProveedores = () => {
    const proveedores = localStorage.getItem('proveedores');
    return proveedores ? JSON.parse(proveedores) : [];
  };
  
  export const saveProveedores = (proveedores) => {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
  };