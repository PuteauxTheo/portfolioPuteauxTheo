import thumbnail from '../assets/testthumbnail.jpg'

export default function DisplayProject(){
    return(
        <div id="display-projects" className='container'>
            <div className="content">
                <h2 className="title">Projets</h2>
                <div className="display-projects">
                    <div className="project">
                        <h3 className="project-title">Title Projet</h3>
                        <span className="project-description">
                            <p>
                                description projet
                                ajout language utilisé
                            </p>
                            <button>Voir le code</button>
                            <button>Acceder au site</button>                        
                        </span>                        
                    </div>
                    <div className='thumbnail-project'>
                        <img src={thumbnail} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}