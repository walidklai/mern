import React from 'react';
import NavBarComp from './components/NavBarComp'
import ShoppingList from './components/ShoppingList'
import { Provider } from 'react-redux'
import myStore from './redux/store'
import ItemModal from './components/ItemModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'reactstrap'

function App() {
  return (
    <Provider store={myStore}>
      <div>
        <NavBarComp />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>

  );
}

export default App;
