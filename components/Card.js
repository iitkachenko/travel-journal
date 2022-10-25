import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl}/>
            <div className="card--content">
                <div className="card--location">
                    <img className="card--location--pin" src="../images/pin.png" />
                    <span className="card--location--country">{props.location}</span>
                    <a className="card--location--map" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <div className="card--terms">{props.startDate} - {props.endDate}</div>
                <p className="card--text">{props.description}</p>
            </div>
        </div>
    )
}