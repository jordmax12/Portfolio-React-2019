import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const defaults = {
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
    errorMessage: '',
    success: false,
    isBusy: false
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaults;
    }

    handleInputChange = (text, prop) => this.setState({ [prop]: text })

    handleSubmit = () => {
        const { firstName, lastName, subject, message, isBusy } = this.state;
        this.setState({ errorMessage: '', isBusy: true });
        let errorMessage = '';
        
        if(firstName.trim().length == 0) errorMessage = 'Need to supply First Name';
        else if(lastName.trim().length == 0) errorMessage = 'Need to supply Last Name';
        else if(subject.trim().length == 0) errorMessage = 'Need to supply Subject';
        else if(message.trim().length == 0) errorMessage = 'Need to supply Message';
        else {
            fetch('/api/sendEmail', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    subject,
                    message
                })
            })
            .then(r => r.json())
            .then(result => {
                this.setState({ success: true, firstName: '', lastName: '', subject: '', message: '' });
                setTimeout(() => {
                    this.setState({ success: false, ...defaults })
                }, 5000);
            })
        }

        this.setState({ errorMessage });
    }

    render() {
        const { firstName, lastName, subject, message, errorMessage, success, isBusy } = this.state;
        return (
            <div className="p50 bgWhite">
                <div className="mw786 center p10">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item md={12}>
                                <h3>Hey, how can I get ahold of you?</h3>
                                <div className="error" style={{color: 'red', display: errorMessage.length == 0 ? 'none' : 'block'}}>{errorMessage}</div>
                                <div className="success" style={{color: 'green', display: success ? 'block' : 'none'}}>Thanks! Email sent. I'll get back to you soon.</div>
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="contact-first-name"
                                    label="First Name"
                                    className="w100"
                                    value={firstName}
                                    onChange={(e) => this.handleInputChange(e.target.value, 'firstName')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="contact-last-name"
                                    label="Last Name"
                                    className="w100"
                                    value={lastName}
                                    onChange={(e) => this.handleInputChange(e.target.value, 'lastName')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    id="contact-subject"
                                    label="Subject"
                                    className="w100"
                                    value={subject}
                                    onChange={(e) => this.handleInputChange(e.target.value, 'subject')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    id="contact-message"
                                    label="Message"
                                    className="w100"
                                    multiline
                                    rows="4"
                                    rowsMax="8"
                                    value={message}
                                    onChange={(e) => this.handleInputChange(e.target.value, 'message')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button disabled={isBusy} variant="contained" color="primary" className="floatR" onClick={this.handleSubmit}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;