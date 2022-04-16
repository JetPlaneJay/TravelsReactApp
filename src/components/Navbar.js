import React from "react"
import MePhoto from "../images/me.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={MePhoto} className="nav--logo" alt="Jay Travel" />
            <h2>my travel journal.</h2>
        </nav>
    )
}

