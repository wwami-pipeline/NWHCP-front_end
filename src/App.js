import React, {Component} from 'react';
// import './App.scss';
import { AppRouter } from './routes/AppRouter';
// import { faParking } from '@fortawesome/free-solid-svg-icons';

/* 
// --- Redux Config ---
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();
*/

// function App() {
class App extends Component {
    render() {
        return (
            // <Provider store={store}>
                <AppRouter />
            // </Provider>
        );
    }
  
}

export default App;
