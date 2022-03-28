import React from 'react'
import carrito from './../../assets/cart.svg'
function CartWidget({cantidadItems}) {
  return (
    <button className="btn btn-success" type="submit">
        <img src={carrito} className="imgCart" alt="carrito"/><span> {cantidadItems} </span>
    </button>
  )
}
export default CartWidget