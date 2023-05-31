import React from 'react'
import { RiDonutChartLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { CiMenuKebab } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import Chat from './Chat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="user">
                <div className="avatar">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" alt="avatar" />
                </div>
                <div className="btns-icons">
                    <RiDonutChartLine style={{ fontSize: "1.5rem" }} />
                    <BiMessageDetail style={{ fontSize: "1.5rem" }} />
                    <CiMenuKebab style={{ fontSize: "1.5rem" }} />
                </div>
            </div>
            <div className="search-bar-container">
                <div className="search-bar">
                    <CiSearch/>
                    <input type="text" name="search" id="search-bar" placeholder='Search or start a new text'/>
                </div>
            </div>
            <hr />
            <div className="chats-container">
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
            </div>
        </div>
    )
}

export default Sidebar
