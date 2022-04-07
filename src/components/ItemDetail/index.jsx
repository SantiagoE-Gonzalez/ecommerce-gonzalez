import React, { useEffect, useState } from 'react'
import './styles.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom';
const ItemDetail = ({ producto }) => {

    const [cantidad, setCantidad] = useState(0);
    const [mostrarContador, setMostrarContador ] = useState(true);
    
    const onAdd = (cantidad) => {
        cantidad>0?setMostrarContador(false):setMostrarContador(true);
        setCantidad(cantidad);
    }

    return (
        <div className="container detailProducto">
            <div className="row">
                <div className="col-sm-3"><img src={producto.image} className='img-fluid' /></div>
                <div className="col-sm-9">
                    <p>Categoria : {producto.category}</p>
                    <h1>{producto.title}</h1>
                    <h3>${producto.price}</h3>
                    <h5>{producto.description}</h5>
                    {mostrarContador?
                    <ItemCount className="col-sm-3" initial={1} stock={10} product={producto.title} onAdd={onAdd}></ItemCount>:
                    <Link className='btn btn-success col-sm-3' to="/cart">Finalizar compra</Link>}
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail