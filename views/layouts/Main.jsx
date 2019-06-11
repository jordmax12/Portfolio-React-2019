import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Resume from '../components/Resume.jsx';
import Timeline from '../components/Timeline.jsx';
import Contact from '../components/Contact.jsx';
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
                <Header />
                <Switch>
                    <Route path="/resume" component={Resume} />
                    <Route path="/timeline" component={Timeline} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default Main;