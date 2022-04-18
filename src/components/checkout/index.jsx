import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import { db } from '../../Firebase/config'
import { collection, addDoc } from "firebase/firestore";

function Checkout() {
  const { totalAPagar, cantidadItems, cart } = useContext(Shop);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log(evento);
    console.log(nombre);
    const order = {
      buyer: {
        nombre: nombre,
        email: email,
        telefono: telefono
      },
      items: {
        cart: cart
      },
      date: new Date(),
      total: totalAPagar
    }
    console.log(order);
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order).then(({ id }) => alert(`Order generada con id ${id}`))
  }
  return (
    <div className='container'>
      <h3>Resumen de la cuenta</h3>
      <div className="row">
        <div className='col-sm-4'>
          <p>Total a pagar: ${totalAPagar}</p>
        </div>
        <div className='col-sm-4'>
          <p>Cantidad de productos: ${cantidadItems}</p>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-sm-4">
            <label className="form-label">Nombre y Apellido</label>
            <input type="text" className="form-control" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
          </div>
          <div className="col-sm-4">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="col-sm-4">
            <label className="form-label">Telefono</label>
            <input type="text" className="form-control" id="telefono" value={telefono} onChange={e => setTelefono(e.target.value)} />
          </div>
        </div>
        <button onClick={enviarFormulario} className='btn btn-success'>Finalizar compra</button>
      </form>
    </div>
  )
}

export default Checkout