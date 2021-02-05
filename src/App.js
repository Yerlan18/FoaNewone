import Navbar from "./components/Navbar";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Cert from "./pages/Cert";
import Contact from "./pages/Contact";
import Item from "./pages/Item";
import Footer from "./components/Footer";
import React from "react";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/catalog' component={Catalog}/>
                <Route exact path='/cert' component={Cert}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/catalog/Humasis_COVID-19' component={Item}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
