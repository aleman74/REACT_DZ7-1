import React from 'react';
import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

function Video(props) {

    const DateTimeP = DateTimePretty(DateTime);

    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimeP date={props.date} />
        </div>
    )
}


export default Video;