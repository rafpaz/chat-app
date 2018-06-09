import React, {Component} from 'react';
import "./SendArea.css";
import moment from 'moment';

const API = "http://localhost:8080/api/";

class SendArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onSend = this.onSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSend() {
        var params = {};
        params.user = "You";
        params.date = moment().format('DD MMM YYYY HH:mm');
        params.text = this.state.text;
        fetch(API + "message", {
            body: JSON.stringify(params),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()).then(this.props.afterSend())
    }

    handleChange(event){
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div id={"send-area"}>
                <div className="row justify-content-around">
                    <textarea name="message" id="message-text-area" cols="20" rows="2"
                              className={"col-8 my-auto"} onChange={this.handleChange}/>
                    <button id="send-btn" className={"btn col-2 my-auto"} onClick={this.onSend}>Send</button>
                </div>
            </div>
        );
    }
}

export default SendArea;
