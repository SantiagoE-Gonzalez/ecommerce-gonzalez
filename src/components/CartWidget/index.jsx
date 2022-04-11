import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider'
import carrito from './../../assets/cart.svg'
function CartWidget() {
  const{cantidadItems} = useContext(Shop);

  return (
    <Link className="btn" to='/cart'>
      <img src={carrito} className="imgCart" alt="carrito" />
      {cantidadItems>0?<span className="badge bg-info"> {cantidadItems} </span>:''}
    </Link>
  )
}
export default CartWidget