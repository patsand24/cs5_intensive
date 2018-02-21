import React, { Component } from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="character-list">
            <div className="card-title">
                <h1><b>{props.name}</b></h1>
                <div className="card-content card-info">
                    <div className="card-info content">Birthdate: {props.birth_year}</div>
                    <div className="card-info content">Height: {props.height}</div>
                    <div className="card-info content">Gender: {props.gender}</div>
                    <div className="card-info content">Eye Color: {props.eye_color}</div>
                    <div className="card-info content">Hair Color: {props.hair_color}</div>
                    <div className="card-info content">Mass: {props.mass}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;