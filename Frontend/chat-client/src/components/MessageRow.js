import React, {Component} from 'react';
import './MessageRow.css';
import PropTypes from 'prop-types';

class MessageRow extends Component {
    render() {
        return (
            <div className={"message-row mt-3 mb-3"}>
                <div className={"col-12 "  + (this.props.user === "You" ? "you-class" : "")}>
                    <div className="row grey">{this.props.user}</div>
                    <div className="row message-text">{this.props.text}</div>
                    <div className="row grey">{this.props.date}</div>
                </div>
            </div>
        );
    }
}

MessageRow.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
};

export default MessageRow;
