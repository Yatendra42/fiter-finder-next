import React from 'react'
import TrendingFlag from './TrendingFlag';

type CardProps = {
  title: string;
  image: string;
  description: string;
  trending?: boolean; 
};

function Card({ title, image, description, trending }: CardProps) {
  const cardImage = {
    src: image,
    alt: title,
  };
  return (
    <div className="fet-card">
      <div className="fet-card-image">
        <img src={cardImage.src} alt={cardImage.alt} />
      </div>
      <div className="fet-card-content">
        <h3 className="fet-card-title">{title}</h3>
        <p className="fet-card-description">{description}</p>
       
      </div>
      {trending && <TrendingFlag />}
     
    </div>
  )
}

export default Card