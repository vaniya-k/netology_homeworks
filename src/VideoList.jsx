import React from 'react';
import WithDatePrettifier from './WithDatePrettifier.jsx'

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="date">{props.date}</p>
        </div>
    )
}

function VideoList(props) {
    return props.list.map((item, i) => <WithDatePrettifier key={`key${i}`} ><Video url={item.url} date={item.date}/></WithDatePrettifier>);
}

export default VideoList;
