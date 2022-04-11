import React, { useContext, useState } from 'react'
import './styles.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
const ItemDetail = ({ producto }) => {

    const [cantidad, setCantidad] = useState(0);
    const [mostrarContador, setMostrarContador ] = useState(true);
    
    const {addItem} = useContext(Shop);

    const onAdd = (cantidad) => {
        cantidad>0?setMostrarContador(false):setMostrarContador(true);
        setCantidad(cantidad);
    }

    const finalizarCompra = () => {
        console.log("inicio finalizar compra. Cantidad: "+cantidad+" producto: "+producto);
        addItem(producto, cantidad);
        console.log("Final de compra");
        
    }

    return (
        <div className="container detailProducto">
            <div className="row">
                <div className="col-sm-3"><img src={producto.image} className='img-fluid' alt={producto.title} /></div>
                <div className="col-sm-9">
                    <p>Categoria : {producto.category}</p>
                    <h1>{producto.title}</h1>
                    <h3>${producto.price}</h3>
                    <h5>{producto.description}</h5>
                    {mostrarContador?
                    <ItemCount className="col-sm-3" initial={1} stock={10} product={producto.title} onAdd={onAdd}></ItemCount>:
                    <Link className='btn btn-success col-sm-3' to='/cart' onClick={finalizarCompra}>Finalizar compra</Link>}
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail