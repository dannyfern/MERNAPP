import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {



    return (
        <div>
            <BrowserRouter >
            <Navbar />

            <Switch>

                
                <Route exact path="/" component={Home} />

            </Switch>
            
            </BrowserRouter>
        </div>
    )
}

export default App;
