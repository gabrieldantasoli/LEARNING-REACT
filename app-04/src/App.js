import './App.css';
import React from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import page1 from './componentes/page1'
import page2 from './componentes/page2'
import page3 from './componentes/page3'

function App() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </header>

      <main>
        <Switch>
          <Route path='/page1' component={page1}/>
          <Route path='/page2' component={page2}/>
          <Route path='/page3' component={page3}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
