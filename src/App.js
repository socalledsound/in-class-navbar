
import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Shopping from './pages/Shopping'
import Navbar from './components/Navbar'
class App extends Component {

    state = {
        user: null
    }

    render(){
        return ( 
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About} />
                    <Route path='/shopping' component={Shopping} />
                    <Redirect to='/' />
                </Switch>
                
            </Fragment>
         );
    }

}
 
export default App;

