import { projectsData } from '../mock/data'

export default function DisplayProject() {


    const joinText = (tab) => {
        const language = []
        tab.forEach(info => {
            language.push(info)
        })
        return language.join('/')
    }
    return (
        <div id="display-projects" className='container'>
            <div className="content">
                <h2 className="title">Projets</h2>

                {projectsData.map((project) => {
                    return (
                        <div key={project.id+"project"} className="display-projects">
                            <div className="project">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-description">
                                    <h4>{project.mission}</h4>
                                    {
                                        project.info.map((info, index) => {
                                            return (
                                                <p key={info+' '+index}>{info}</p>
                                            )
                                        })
                                    }
                                    <div>
                                        {joinText(project.language)}
                                    </div>
                                    

                                    <a href={project.repo}>
                                        <button>Voir le code</button>
                                    </a>
                                    <a href={project.url}>
                                        <button>Acceder au site</button>
                                    </a>

                                </span>
                            </div>
                            <div className='thumbnail-project'>
                                <img src={require('../assets/project/'+project.img)} alt="" />
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}