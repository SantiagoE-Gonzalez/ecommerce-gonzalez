import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemList from '../../components/ItemList'
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
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        if (!id) {
          setItems(data);
        }else{
          const itemsFiltrados = data.filter(item => item.category === id);
          setItems(itemsFiltrados);
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