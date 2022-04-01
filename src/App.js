import React from 'react';
import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/*<!--<ItemListContainer greeting='Bienvenidos a la tienda'></ItemListContainer>-->*/}
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}
export default App;
