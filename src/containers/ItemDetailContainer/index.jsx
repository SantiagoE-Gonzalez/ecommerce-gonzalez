import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/index'
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        (async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products/1');
            const data = await response.json();
            setTimeout(() => { // uso el timeout para simular una demora
              setProducto(data);
            }, 0);
          } catch (error) {
            console.log(error);
          }
        })()
      }, [])

    return (
        <>
            <ItemDetail producto={producto}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer