import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume-container" style={{ backgroundColor: 'white' }}>
                <Grid container>
                    <Grid item md={3}>
                        <div className="resume-me">
                            <img className="me-image" src="./jordan.jpg" alt="Jordan" />
                            <div className="social-container">
                                <ul className="social">
                                    <li><a target="_blank" href="https://www.github.com/jordmax12"><i className="fab fa-github fa-2x"></i></a></li>
                                    <li><a target="_blank" href="https://linkedin.com/pub/jordan-max/87/59b/b45/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={9}>
                        <div className="resume-jobs">

                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Resume;