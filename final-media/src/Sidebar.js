import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"

function Sidebar() {
    //getting the user information form the redux store
    const user = useSelector(selectUser);


    const recentItem = (topic) =>(
        <div className="sidebar_recentItems">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://media.istockphoto.com/photos/intentionally-blurred-colorful-filtered-view-of-a-concrete-sidew-picture-id533840908?k=6&m=533840908&s=612x612&w=0&h=Pno5yyneRvDwEvfozCno2yU9TGdfu_obyf-AwQUoWAQ=" 
                alt="Profile Background"/>
                <Avatar className="sidebar_avatar" src={user.photoUrl} alt="">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar_statnumber">2300</p>
                </div>
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar_statnumber">1900</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('developer')}
                {recentItem('consoult')}
            </div>

        </div>
    )
}

export default Sidebar

