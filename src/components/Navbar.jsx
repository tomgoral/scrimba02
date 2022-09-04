
import { useState } from 'react'
import airbnb from "../assets/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo" />
        </nav>
    )
}