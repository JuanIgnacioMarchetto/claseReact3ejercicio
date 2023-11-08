import React from 'react';

function DetalleProducto() {
  const producto = {
    nombre: 'Producto de Ejemplo',
    descripcion: 'Esta es la descripción del producto.',
    precio: '$99.99',
    sku: 'SKU12345',
    cantidadDisponible: 50,
  };
  return (
    <div>
      <h1>Detalle del Producto</h1>
      <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: {producto.precio}</p>
        <p>SKU: {producto.sku}</p>
        <p>Cantidad Disponible: {producto.cantidadDisponible}</p>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <DetalleProducto />
    </div>
  );
}

export default App;
