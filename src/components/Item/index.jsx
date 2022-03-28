import React from 'react'
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
          <div className="card-footer text-muted">
            <p>Precio: <em><span>${props.price}</span></em></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item