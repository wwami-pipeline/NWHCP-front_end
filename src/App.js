import React from 'react';
import Header from 'components/Header';
import Main from './Main';
import 'css/App.css';
import Footer from 'components/Footer'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';



const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Main />
      <Footer/>
    </React.Fragment>
      
  )
}

export default App;
