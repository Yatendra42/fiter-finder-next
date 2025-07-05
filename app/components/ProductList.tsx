import React from 'react'
import Card from './Card'

const cards = [
  {
    title: "BDSM", 
    description: "Involves consensual control, restraint, and power exchange",
    image: "/images/imges-1.jpg",
    trending: true  
  },
    {
    title: "Feet", 
    description: "Beautiful feet content from verified sellers",
    image: "/images/imges-2.jpg",
    trending: true 
  },
      {
    title: "Lingerie", 
    description: "Alluring outfits designed to enhance confidence, desire, and sensuality.",
    image: "/images/imges-3.jpg" ,
    trending: true
  },
        {
    title: "Cosplay", 
    description: "Dress-up fun that fuels imagination and desire.",
    image: "/images/imges-4.jpg" ,
    trending: true
  },
    {
    title: "Findom", 
    description: "Dress-up fun that fuels imagination and desire.",
    image: "/images/imges-2.jpg",
    
  },
    {
    title: "Voyeurism", 
    description: "Real, unposed moments that feel intimate and unrehearsed.",
    image: "/images/imges-1.jpg",
   
  },
    {
    title: "Spanking", 
    description: "Dress-up fun that fuels imagination and desire.",
    image: "/images/imges-3.jpg",
    
  },
    {
    title: "Leather", 
    description: "Bold, sensual style symbolizing power, kink, and fetish appeal.",
    image: "/images/imges-2.jpg",
    
  },
   {
    title: "Feet", 
    description: "Beautiful feet content from verified sellers",
    image: "/images/imges-2.jpg",
   
  },
      {
    title: "Lingerie", 
    description: "Alluring outfits designed to enhance confidence, desire, and sensuality.",
    image: "/images/imges-3.jpg",

  },
        {
    title: "Cosplay", 
    description: "Dress-up fun that fuels imagination and desire.",
    image: "/images/imges-4.jpg",
   
  },
    {
    title: "Findom", 
    description: "Dress-up fun that fuels imagination and desire.",
    image: "/images/imges-2.jpg",
    
  },
]

function ProductList() {
  return (
    <div className="container card-wrapper">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          trending={card.trending || false}
        />
      ))}
    </div>
  )
}

export default ProductList