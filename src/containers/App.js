import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/User/LoginPage';
import UserSignupPage from '../pages/User/UserSignupPage';
import TopBar from '../components/TopBar';
import NotePage from "../pages/Note/NotePage";

function App() {
    return (
        <div>
            <TopBar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={NotePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/signup" component={UserSignupPage}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
