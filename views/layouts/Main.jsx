import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div style={{height: '50px', width: '100%', backgroundColor: 'grey', color: 'white'}} id="header">
                    Header
                </div>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default Main;