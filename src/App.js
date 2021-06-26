
import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Shopping from './pages/Shopping'
import Store from './pages/Store'
import Navbar from './components/Navbar'
class App extends Component {

    render(){
        return ( 
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About} />
                    <Route path='/shopping' component={Shopping} />
                    <Route path='/stores/:location' component={Store} />
                    <Redirect to='/' />
                </Switch>
                
            </Fragment>
         );
    }

}
 
export default App;

