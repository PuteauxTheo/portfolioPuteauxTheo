import me from '../assets/me.JPG'

export default function About() {
    return (
        <div id="about" className="container">
            <div className='content'>
                <h2 className="title">About me</h2>
                <div className="description">
                    <span className='profil-pic'>
                        <img src={me} alt="" />
                    </span>
                    <div>
                        <p>Prenom : Theo</p>
                        <p>Nom : Puteaux</p>
                        <p>Date de naissance : 18 juin 2000</p>
                        <p>Né a Mantes La Jolie</p>
                        <p>Presentation : J'ai toujours aime les nouvelles technologies, la science. Je suis quelqu'un de tres serieux qui aime les choses bien faites et optimiser.
                            J'aime bien pratiquer pas mal de sport mais principalement du Jiu-jitsu brésilien en compétition et des echecs a mes heures perdus.                                       
                        </p>
                        <p>Techno utilise</p>
                        <div>Contactez moi ( linkedin, twitter, gitHub )</div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}