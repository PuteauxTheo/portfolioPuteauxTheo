import CirclePercent from "./CirclePercent";
import LinearPercent from "./LinearPercent";
import { nanoid } from 'nanoid';
export default function Skills(){

    const mainLanguage = [{langage: 'HTML / CSS', percent: 80}, {langage: 'JS', percent: 60}, {langage: 'ReactJS / Redux',percent: 50}];
    const otherLanguage = [{langage: 'C++', percent: 10}, {langage: 'Java', percent: 10}, {langage: 'SQL',percent: 25},{langage: 'Bash', percent: 20}];

    return (
        <div id="skills" className="container">
            <div className="skills content">
                <h2 className="title">Compétences</h2>
                <div className="skills-main-langage">
                    {
                        mainLanguage.map((el,index) => {
                            return (<div className="circle-percent" key={`${nanoid}+${index}`}>
                                        <h4>{el.langage}</h4>
                                        <CirclePercent value={el.percent}/>
                                    </div>
                                )
                        })
                    }
                </div>
                <div className="skills-other-langage">
                    <div className="other-langage">
                        {
                            otherLanguage.map((el,index) => {
                                return (
                                    <div className="linear-percent" key={`${nanoid}+${index}`}>
                                        <h4>{el.langage}</h4>
                                        <LinearPercent value={el.percent}/>
                                    </div> 
                                )
                            })
                        }
                    </div>
                    <div className="tool-supp">
                        <h4>OS et Outils</h4>
                        <ul>
                            <li>Maitrise des environnements Window, MacOS et Linux</li>
                            <li>Partage des projet avec GitHub et utilisations de Git pour le versionning</li>
                            <li>Création de Media Queries afin de gérer la partie responsive</li>
                            <li>Utilisation de Sass pour optimiser les applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}