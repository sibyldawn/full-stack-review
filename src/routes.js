import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Profile from './Components/Profile';
import Words from './Components/Words';

export default function routes(){
    return <Switch>
        <Route path="/" exact render={ ()=>{
            return (
                <div>
                    <h1>Welcome to Word Bank!</h1>
                </div>
            )
        }

        }/>
        <Route path="/profile" component={Profile}/>
        <Route path="/words" component={Words}/>
    </Switch>
}