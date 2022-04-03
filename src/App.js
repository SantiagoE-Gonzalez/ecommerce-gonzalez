import React from 'react';
import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>{/* Toda la aplicación va a estar dentro del browser router */}
        <NavBar />
        <Routes> {/* Acá adentro van a ir las "rutas" */}
          <Route path='/' element={<ItemListContainer />} /> {/* path es lo que esta en la url, ej /home, /etc, element es el componente a mostrar. */}
          <Route path='/category/:id'  element={<ItemListContainer/>}/> {/* categoria :id significa que espera cualquier valor, que será en string */}
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> {/* va al contenedor, en el contenedor esta la lógica de como mostrar los componentes. */}
        </Routes>

      </BrowserRouter>
      {/*<!--<ItemListContainer greeting='Bienvenidos a la tienda'></ItemListContainer>-->*/}

    </div>
  );
}
export default App;
