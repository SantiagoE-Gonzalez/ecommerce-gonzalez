import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
import './styles.css';
const Cart = () => {
    const { cart, clear, removeItem, totalAPagar} = useContext(Shop);
    const removerProducto = (item) =>{
        removeItem(item);
    }
    return (
        <div className="container">
            
            <div>
                <button className="btn btn-danger botonEliminar" onClick={clear}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                     Vaciar carrito</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => {
                        /* cuando se hace un map, cada elemento del return debe tener una key */
                        return <tr key={item.id}>
                            <td><img className='imagenPequena' src={item.image} alt={item.title} /></td>
                            <th>{item.title}</th>
                            <td>{item.cantidad}</td>
                            <td>${item.price}</td>
                            <td>${item.cantidad * item.price}</td>
                            <td><button className="btn btn-danger" onClick={() => removerProducto(item)}>Borrar</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div class="row">
                <div class="col-sm-4">
                    <h5>Total a pagar: ${totalAPagar}</h5>
                </div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4 alignDerecha" >
                    <Link to="/checkout" className="btn btn-success" >Finalizar compra</Link>
                    </div>
            </div>
        </div>
    )
}

export default Cart;