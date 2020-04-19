import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';

import NewRegister from './Pages/NewRegister'
import MovieList from './Pages/MovieList';

class App extends Component{
    render(){
        return (
            <div className="App">
                <Header></Header>
                <Route path="/yeni-kayit" component={NewRegister} />
                <Route path="/" exact component={MovieList} />
            </div>
        );
    }
}

export default App;
