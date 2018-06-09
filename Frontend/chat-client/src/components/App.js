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
        this.afterSend = this.afterSend.bind(this);
    }

    componentDidMount() {
        fetch(API + "messages").then(result => result.json())
            .then(json => {
                if (json) {
                    this.setState({
                        messages: json
                    });
                }
            });
    }

    afterSend(){
        this.componentDidMount();
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
                            afterSend={this.afterSend}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
