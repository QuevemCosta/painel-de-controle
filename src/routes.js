import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import PageNewProduct from './pages/NewProduct';
import PageNewCategory from './pages/NewCategory'


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/novo-produto" component={PageNewProduct} />
        <Route path="/nova-categoria" component={PageNewCategory} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes
