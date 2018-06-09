import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageRow from "./MessageRow";

class Messages extends Component {
    render() {
        let messageRows;
        if (this.props.messages) {
            messageRows = this.props.messages.map((message, i) => {
                return (
                    <MessageRow
                        user={message.user}
                        text={message.text}
                        date={message.date}
                        key={"message-row-" + i}
                    />
                )
            })
        }

        return (
            <div>
                {messageRows}
            </div>
        );
    }
}

Messages.propTypes = {
    messages: PropTypes.array,
};

export default Messages;
