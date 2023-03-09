import React from 'react';
import star from './star.png'

function Card(props){
    return (
       <div className="card">
            <img src={props.img} className='image1' alt="image1" />
            <div className="card-stats">
                <img src={star} className='star' alt="star"/>
            <span>{props.rating}</span>
            <span>({props.reviewcount}) • </span>
            <span>{props.country}</span>
            </div>
            <span className='title'>{props.title}</span>
            <p>{props.price}</p>       
        
            </div>
        
        
       
    )
}

export default Card;