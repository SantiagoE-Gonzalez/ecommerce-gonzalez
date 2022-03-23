import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='Bienvenidos a la tienda'></ItemListContainer>
    </div>
  );
}
export default App;
