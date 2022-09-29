import React from "react"

export default function Header() {
    return (
        <div id="header" className="container">
            <div className="content">
                <h1 className="welcome">Hi, bienvenue sur mon site !<br />
                    Je suis <span className="name">Theo</span> 😀<br/>
                    <span className="job">Développeur Front End Junior</span>
                </h1>
                <span className="read-more">
                    <a href="#about">
                        <button className="custom-btn btn-read-more">En savoir plus</button>
                    </a>
                        
                
                </span>
            </div>
        </div>
    )
}