import React from 'react'
import carrito from './cart.svg'
function CartWidget({cantidadItems}) {
  return (
    <button className="btn btn-success" type="submit">
        <img src={carrito} className="imgCart"/><span> {cantidadItems} </span>
    </button>
  )
}
export default CartWidget