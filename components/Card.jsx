import { useState } from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.item.imageUrl}`} className="card--image" />
      <div className="card--info">
        <div className="card--stats">
          <span className="gray">📍{props.item.location} </span>
          <span className="gray">
            <a href={`${props.item.googleMapsUrl}`} target="_blank">
              View on Google Maps
            </a>
          </span>
        </div>
        <h3 className="card--title">{props.item.title}</h3>
        <h5>
          {props.item.startDate} -> {props.item.endDate}
        </h5>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
