import TerminalText from "../components/TerminalText";

import "./Home.css"


export default function Home(){

    const texts : string[] = ["Full-stack developer", "Architect", "DevOps", "Azure cloud engineer", "Team leader", "++ 16 years of experience", ".NET", "C#", "Java", "Azure", "Visual Studio", "VS Code", "VSDEVOPS", "Python", "Flutter", "React", "Dynamic", "Adaptable", "Independent", "Teamwork", "Joyful", "Responsible", "Reliable", "Responsive"];
        
    return (
        <div className="centerDynamicElement">
            <div className="terminal">
            <h1>Mauricio Gonz&aacute;lez</h1>
            </div>
            
            <TerminalText texts={texts} />
        </div>
    );
}