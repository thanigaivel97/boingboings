import React from 'react';
import Mainapp from './components/mainapp/index'
import {Route , BrowserRouter} from 'react-router-dom'
import Searchbox from './prodpage/searchbar/search'
import Singlecat from './seperatecat/index'
import Catpage from './catpage/allcat/index'
import './app.css'
import MainBody from './boingboingdemo/components/MainBody';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Route 
            path="/setup-demo/:item"  
           component={MainBody}
        />

      <Route 
            path="/setup-demo"  exact
           component={MainBody}
        />

      

        <Route path="/prod" exact component={Searchbox} /> 
      
        <Route path="/product/:url" exact component={Mainapp} />
        <Route path="/" exact component={Catpage} />
        <Route path="/categories/:id" exact component={Singlecat} ></Route>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
