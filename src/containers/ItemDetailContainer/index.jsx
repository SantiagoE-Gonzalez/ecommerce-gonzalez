import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetail/index'
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams ();
    useEffect(() => {
        (async () => {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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