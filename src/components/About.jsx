import me from '../assets/me.jpg'

export default function About() {

    const languageUsed = ['HTML', 'CSS', 'JS', 'SCSS', 'ReactJS', 'Redux', "Git"];
    const urlContact = ["linkedinLien", "twitter", "gitHub"];
    return (
        <div id="about" className="container">
            <div className='content'>
                <h2 className="title">About me</h2>
                <div className="aboutme">
                    <div className='description'>
                        <p className='identity'>Prenom : Theo<br />
                            Nom : Puteaux<br />
                            Date de naissance : 18 juin 2000<br />
                            Né a Mantes La Jolie</p>
                        <div className='presentation'>
                            <h4>Présentation</h4>
                            <p> J'ai toujours aime les nouvelles technologies, la science. Je suis quelqu'un de tres serieux qui aime les choses bien faites et optimiser.
                                J'aime bien pratiquer pas mal de sport mais principalement du Jiu-jitsu brésilien en compétition et des echecs a mes heures perdus.
                            </p>
                        </div>
                        <div className='language-used'>
                            {
                                languageUsed.map((info) => {
                                    return (
                                        <img key={info + 'logo'} src={require('../assets/logo/' + info + '.png')} alt={'logo' + info} />
                                    )
                                })
                            }
                        </div>

                        
                    </div>
                    <div className='profil-pic'>
                        <span className='img'>
                            <img src={me} alt="" />
                        </span>
                        <div className='contact-me'>
                            <h4>Contactez moi</h4>
                            <p>theo.ptx@laposte.ent</p>
                            <div className='logo'>
                                <img src={require('../assets/logo/cv.png')} alt='' />
                                <img src={require('../assets/logo/linkedin.png')} alt='' />
                                <img src={require('../assets/logo/GitHub.png')} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}