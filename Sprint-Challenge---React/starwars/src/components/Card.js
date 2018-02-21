import React, { Component } from 'react';

const Card = (props) => {
    return (
        <div className="character-list">
            <h1>{props.character}</h1>
            <div>{props.birthYear}</div>
            <div>{props.height}</div>
            <div>{props.sex}</div>
            <div>{props.eyeColor}</div>
            <div>{props.hairColor}</div>
            <div>{props.mass}</div>
        </div>
    )
}

export default Card;