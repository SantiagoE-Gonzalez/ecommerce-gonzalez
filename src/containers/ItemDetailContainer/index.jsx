import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetail/index'
import { db } from '../../Firebase/config';
import { doc, getDoc } from "firebase/firestore";

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
            /*const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              setProducto({id: doc.id,...docSnap.data()})
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }*/
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