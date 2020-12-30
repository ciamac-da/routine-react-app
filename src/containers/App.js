import React, {Fragment} from "react";
import Todos from "../components/Task/Todos";
import About from '../components/common/About';
import {Route, Switch} from "react-router-dom";
import Nav from '../components/common/Nav';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Fragment>
        <Nav />
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                    <Switch>
                    <Route path="/" exact component={Todos} />
                    <Route path="/about" 
                    //component={About} 
                    render={()=>(
                        <About teachersName="Ciamac" />
                )}
                    />
                    </Switch>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </Fragment>
    );
};

export default App;
