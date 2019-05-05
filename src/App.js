import React from 'react';
import Header from 'components/Header';
import Main from './Main';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'css/App.css';



const App = () => {
  return (
    <div>
      <Header/>
      <Main />
      <footer/>
    </div>
  )
}

export default App;
