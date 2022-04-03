import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
function Item(props) {
  return (
    <>
      <div className="tarjetaProducto col-sm-3">
        <div className="card minheight ">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
            <img src={props.pictureUrl} className="card-img-top mb-3 limitImage" alt={props.title} />
          </div>
          <div className="card-footer text-muted row">
            <p className='col-sm-6'>Precio: <em><span>${props.price}</span></em></p>
            <Link className='btn btn-success col-sm-6' to={`/item/${props.id}`} >más detalles</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item