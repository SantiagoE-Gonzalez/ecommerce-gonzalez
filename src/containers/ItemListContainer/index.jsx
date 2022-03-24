import React from 'react'
import ItemCount from '../../components/ItemCount'
function ItemListContainer({greeting}) {
  const onAdd = (count) => {
    console.log(`se agregaron ${count} elementos al carrito`);
  };
  return (
    <div className="container">
        <h2>{greeting}</h2>
        <div className="row">
          <ItemCount product="Camisa tiger" stock={5} initial={1} onAdd={onAdd}></ItemCount>
          <ItemCount product="Pantalon tiger" stock={5} initial={1} onAdd={onAdd}></ItemCount>
          <ItemCount product="Zapatillas tiger" stock={5} initial={1} onAdd={onAdd}></ItemCount>
          <ItemCount product="Remera tiger" stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </div>
        
    </div>
  )
}

export default ItemListContainer