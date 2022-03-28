import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  
  // se usa el useEffect para que se ejecute el async apenas 
  // se carga la página
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('mock/mock.json');
        const data = await response.json();
        setTimeout(()=>{ // uso el timeout para simular una demora
          setItems(data);
        },2000);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <div className="row">
        <ItemList items={items}></ItemList>
      </div>
    </div>
  )
}

export default ItemListContainer