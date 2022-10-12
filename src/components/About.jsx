import me from '../assets/me.jpg'

export default function About() {


    return (
        <div id="about" className="container">
            <div className="aboutme content">
                <h2 className="title">A propos de moi </h2>
                <div className='aboutme-information'>
                    <div className='profil-pic'>
                        <span className='img'>
                            <img src={me} alt="" />
                        </span>
                    </div>
                    <div className='description'>
                        <div className='presentation'>
                            <h3>Présentation</h3>
                            <p>J'ai commencé à decouvrir la programmation en Licence Informatique, c'est à la fin de ma deuxieme année que je souhaite m'orienté vers quelque chose de plus concret,
                                C'est alors que je décide me lancer dans la formation de Développeur Web Front End avec OpenClassroom.
                                Je continue aujourd'hui de découvrir ce monde à travers les nombreuses ressources proposées sur la toile.
                            </p>
                        </div>
                        <div className='contact-me'>
                            <h3>Me contacter</h3>
                            <div className='contact-me-data'>
                                <p>theo.ptx@laposte.net</p>
                                <div className='logo'>
                                    <a href='https://www.canva.com/design/DAFNsL6XdTk/XvmBOe68cFqRzw5j8qTHwA/view?utm_content=DAFNsL6XdTk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target={"_blank"} rel=" noopener noreferrer">
                                        <img src={require('../assets/logo/cv.png')} alt='' title='Voir CV' />
                                    </a>

                                    <a href='https://www.linkedin.com/in/theo-puteaux-a94100250' target={"_blank"} rel='noopener noreferrer'>
                                        <img src={require('../assets/logo/linkedin.png')} alt='' />
                                    </a>
                                    <a href='https://github.com/PuteauxTheo' target={"_blank"} rel=" noopener noreferrer">
                                        <img src={require('../assets/logo/GitHub.png')} title="GitHub" alt='GitHub' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}