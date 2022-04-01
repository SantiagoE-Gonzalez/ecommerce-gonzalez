import React from 'react'
import './styles.css'
const ItemDetail = ({ producto }) => {
    return (
        <div className="container detailProducto">
            <div className="row">
                <div className="col-sm-3"><img src={producto.image} className='img-fluid' /></div>
                <div className="col-sm-9">
                    <p>Categoria > {producto.category}</p>
                    <h1>{producto.title}</h1>
                    <h3>${producto.price}</h3>
                    <h5>{producto.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail