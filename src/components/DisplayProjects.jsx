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
                        <div key={project.id + "project"} className="display-projects">
                            <div className="project">
                                <h3 className="project-title">{project.title}</h3>
                                <div className='thumbnail-project'>
                                    <div className='img'>
                                        <img src={require('../assets/project/' + project.img)} alt="" />
                                    </div>
                                </div>
                            </div>
                            <span className="project-description">
                                <h4>{project.mission}</h4>
                                {
                                    project.info.map((info, index) => {
                                        return (
                                            <li key={info + ' ' + index}>- {info}</li>
                                        )
                                    })
                                }
                                <div className='language'>
                                    {joinText(project.language)}
                                </div>

                                <div className='project-button'>
                                    <a href={project.repo} className='frame'>
                                        <button className='custom-btn btn-code'><span>Voir le code</span></button>
                                    </a>
                                    <a href={project.url} className='frame'>
                                        <button className='custom-btn btn-site'><span>Acceder au site</span></button>
                                    </a>
                                </div>

                            </span>

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}