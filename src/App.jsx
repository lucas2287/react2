import React from 'react';
import ItemCount from './componentes/ItemCount/ItemCount';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';




import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./componentes/ItemDetail/ItemDetailContainer/ItemDetail";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={ <ItemDetailContainer />} />
      <Route path='/categoria/:idCategoria' element={ <ItemDetailContainer />} />
      <Route path='/item/:idtem' element={ <ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App