import { useState } from 'react'
import star from "../assets/images/star.png"
import img01 from "../assets/images/katie-zaferes.png"
import img02 from "../assets/images/wedding-photography.png"
import img03 from "../assets/images/mountain-bike.png"

const images = [img01, img02,img03]



export default function Card(props) {
    let path ="../assets/images/"
    let lemmy = path + props.id
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    let picture
    if (props.id === 1){
        picture = img01
    } else if (props.id === 2) { 
        picture = img02
    } else{
        picture = img03
    }



    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }

            <img src = {picture} className="card--image" />
                    
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}