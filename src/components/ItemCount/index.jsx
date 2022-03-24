import React, {useState, useEffect} from 'react';
import './index.css'
const ItemCount = ({product, stock, initial, onAdd}) => {
    const [cantidadElegida, setCantidadElegida] = useState(initial);
    const [disableBtnSumar, setDisableBtnSumar] = useState(false);
    const [disableBtnRestar, setDisableBtnRestar] = useState(false);

    const handleSumarCantidad = () => {
        if(cantidadElegida<stock){
            setCantidadElegida(cantidadElegida+1);
        }
    };
    const handleRestarCantidad = () => {
        if(cantidadElegida>initial){
            setCantidadElegida(cantidadElegida-1);
        }
    };

    useEffect(()=> {
        setDisableBtnRestar(cantidadElegida===stock?true:false);
        setDisableBtnSumar(cantidadElegida===initial?true:false);
    }, [cantidadElegida, initial, stock])

  return (
        <div className="card itemCount">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{product}</h6>
                <div className="formularioHorizontal row">
                    <button className="btn btn-success col-sm-2" disabled={disableBtnRestar} onClick={handleRestarCantidad}> - </button>
                    <input className="col-sm-8 formPropio" type="text" readOnly value={cantidadElegida} max={stock}></input>
                    <button className="btn btn-success col-sm-2" disabled={disableBtnSumar} onClick={handleSumarCantidad}> + </button>
                </div>
                <div className="row">
                    <button className="btn btn-primary col-sm-12" onClick={()=>onAdd(cantidadElegida)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
  )
}

export default ItemCount