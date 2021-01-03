import React , {useEffect, useState}from 'react'
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventIcon from '@material-ui/icons/Event';
import Posts from './Posts';
import {db} from "./firebase";
import firebase from "firebase";

function Feed() {

    const [input, setInput] = useState (""); // stores the information for the post

    
    const [posts, setPosts] = useState ([]); // stores the actual posts

    useEffect(() =>{
        db.collection("posts")

    }, [])

    const sendPost = (e)=>{
        e.preventDefault(); // Prevents the Page form Refreshing when ever a Post is Made

    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input  type="text"/> {/* Ensure that what we type in is directly added to the database */}
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed_inputoptions">
                    <InputOptions Icon={ImageIcon} title="Photos" color="#C32A1E"/>
                    <InputOptions Icon={EventIcon} title="Photos" color="#F2FA37"/>  
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#67D224"/>  
                    <InputOptions Icon={CalendarViewDayIcon} title="Write Artcles" color="#2FBEF6 "/>  
                </div>
            </div>
            {posts.map(({id , data:{name, description, message, photoUrl}}) =>(
                //Purpose of the code is to render out any information related to post on thr screen
                // Notice how the table where all the infomarion is stored in matches the ones for the prop names made in the Post.js file
                <Posts
                key={id} // This is the Unique Idenfier 
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                
                /> // This will Render out all our Post which will help when we create Them and View them 
            ))}


            <Posts
                name ="Test"
                description ="This is to show the code works"
                message ="I've Made this code 3 times now"
            
            />
        </div>
    )
}

export default Feed
