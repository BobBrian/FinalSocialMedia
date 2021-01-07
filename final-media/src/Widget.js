import React from 'react';
import "./Widget.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {

    const newsArticle = (heading, subtitle) => {
        <div className="widgets_article">
            <div className="widgets_articleLeft" >
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className="widgets">
            <div className="widgets_header" >
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newsArticle ("We are in the Year 2021 is upon us and things are already falling apart","How we will we cope")}
            {newsArticle ("Recently there have been vaccines for COVID-19","Lets hope it goes well")}
            {newsArticle ("Taxi Riots Expected Later the Year","How Shocking")}
            {newsArticle ("Is REACT the Best Programming Language ? ","You Decide ")}
            {newsArticle ("Tesla Reaches new Height in development","Other Car and Auto Manufacurers Outraged")}
        </div>
    )
}

export default Widget
