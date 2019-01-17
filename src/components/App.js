import React from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';


const App = () => {
  console.log("yo!")
  console.log(process.env)
  var a = fetch(":4002/v1/pipeline-db/getallorgs")
    .then(res => {
      console.log(res)
    })

  return (
    <div>
      <Header/>
      <Main />
    </div>
  )
}

export default App;
