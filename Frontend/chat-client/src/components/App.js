import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from "./Messages";
import SendArea from "./SendArea";

const API = "http://localhost:8080/api/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.fetchAndUpdate = this.fetchAndUpdate.bind(this);
    }

    fetchAndUpdate(){
        fetch(API + "messages").then(result => result.json())
            .then(json => {
                if (json) {
                    this.setState({
                        messages: json
                    });
                }
            });
    }

    componentDidMount() {
        this.fetchAndUpdate();
    }

    render() {
        return (
            <div className="App">
                <div className="container justify-content-center">
                    <div id={"app-container"}>
                        <div className="container-fluid">
                            <div id="message-list" className="row">
                                {this.state.messages &&
                                <Messages
                                    messages={this.state.messages}
                                />
                                }
                            </div>
                        </div>
                        <SendArea
                            afterSend={this.fetchAndUpdate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
