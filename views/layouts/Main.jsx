import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Header from './Header.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="main" style={{ backgroundColor: '#0D1116' }}>
                {/* <div style={{height: '50px', width: '100%', backgroundColor: 'grey', color: 'white'}} id="header">
                    Header
                </div> */}
                <Header />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default Main;