import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemList from '../../components/ItemList'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../Firebase/config';

function ItemListContainer({ greeting }) {
  //const {estadoA} = useContext(Shop); 
  /*
  para usar el valor el contexto, debo hacer const y entre {} pongo el mismo nombre
  de la propiedad. Luego = useContext(nombre del contexto);
  */
  const [items, setItems] = useState([]);
  const { id } = useParams(); //useParam se usa para usar parametros que van a venir en la url, como el id en category/:id
  // se usa el useEffect para que se ejecute el async apenas 
  // se carga la página

  //Uso de funcion del contexto.
  //const {fnDelContext} = useContext(Shop);
  //console.log(fnDelContext(12,3));

  useEffect(() => {
    (async () => {
      try {
        try {
          let queryConsultaProductos = query(collection(db, "productos"));
          if(id){
            queryConsultaProductos = query(collection(db, "productos"), where("category", "==", id));
          }
          collection(db, "productos")
          const querySnapshot = await getDocs(queryConsultaProductos);
          const productos = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            productos.push({id: doc.id, ...doc.data()});
          });
          setItems(productos);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [id]) /**le agrego el id para que cuando el id cambie, se refresque, si no, no lo hara */
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <div className="row">
        {items.length === 0 ?
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
        </div> : <ItemList items={items}></ItemList>}

      </div>
    </div>
  )
}

export default ItemListContainer