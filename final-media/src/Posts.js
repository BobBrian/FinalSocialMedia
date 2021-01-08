import React from 'react'
import "./Posts.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InputOptions from './InputOptions';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core'

function Posts ({name, description, message, photoUrl}) {
        // the Forwardref if here for the flip animation when posts are added

        //One thing to bear in mind is the Props for Posts
        // Becuase those are used Heavily to Add information 
        // to the database of information
    return (
        <div className="post">
        <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar> 
            <div className="post_info">
                {/* Note that these take the place of the props we have inserted */}
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOptions Icon ={ThumbUpAltIcon} title="like" color="gray"/>
            <InputOptions Icon ={ChatIcon} title="Comment" color="gray"/>
            <InputOptions Icon ={ShareIcon} title="Share" color="gray"/>
            <InputOptions Icon ={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
    )
}

export default Posts
