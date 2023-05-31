import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoIosAttach } from 'react-icons/io';
import { CiMenuKebab } from 'react-icons/ci';
const Userchat = () => {
    return (
        <div style={{display:"block",height:"100%",width:"65%"}}>
        <div className='user_chat'>
            <div className="chat-info">
                <div className="avatar">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" alt="avatar1" />
                </div>
                <div className="name-msg">
                    <h4>Alone</h4>
                    <p>{new Date().toLocaleString()}</p>
                </div>
            </div>
            <div className="sharing">
                <CiSearch style={{ fontSize: "1.5rem" }} />
                <IoIosAttach style={{ fontSize: "1.5rem" }} />
                <CiMenuKebab style={{ fontSize: "1.5rem" }} />
            </div>
        </div>
            <div className="chat_body">
            <p className={`chat_message ${true && `chat_receiver`}`}>
                Hope you are doing well!!
                <span className='chat_timeStamp'>
                    {new Date().toLocaleTimeString()}
                </span>
            </p>
            <p className='chat_message'>
                hii i am fine!!
                    <span className='chat_timeStamp'>
                        {new Date().toLocaleTimeString()}
                    </span>
            </p>
            </div>
            <div className="chat_footer">
                <form action="" method="get">
                <textarea name="text" id="msg" cols="30" rows="3" placeholder='Type Message Here...'></textarea>
                    <button type="submit" id='btn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Userchat
