import React from 'react'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-info">
                <div className="avatar">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" alt="avatar1" />
                </div>
                <div className="name-msg">
                    <h4>Alone</h4>
                    <p>How are you?</p>
                </div>
            </div>
            <div className="time">
                <p>9:00 AM</p>
            </div>
        </div>
    )
}

export default Chat
