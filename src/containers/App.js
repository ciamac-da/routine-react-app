import React, {Fragment} from "react";
import Todos from "../components/Task/Todos";
import AddNewTask from "../components/Task/AddNewTask";
import About from '../components/common/About';
import {Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                    <Switch>
                    <Route path="/" exact component={Todos} />
                    <Route path="/about" component={About} />
                    </Switch>

                    <About />
                    </div>
                </div>
            </div>
            <AddNewTask />
        </Fragment>
    );
};

export default App;
