import React from 'react';
import Header from 'components/Header';
import Main from './Main';
import Footer from 'components/Footer'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'css/App.css';



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
