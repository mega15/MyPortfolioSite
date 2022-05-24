import { Button, Card, Col, Row, Image } from "react-bootstrap";
import ProjectCardInfo from "../components/ProjectCardInfo";
import background from "../img/bg1.jpg"
import a1 from "../img/olimpico/a1.png"
import a2 from "../img/olimpico/a2.png"
import a3 from "../img/olimpico/a3.png"
import a4 from "../img/olimpico/a4.png"
import arch from "../img/olimpico/arch.png"

import { GiNotebook } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { GrCloudComputer } from "react-icons/gr";
import { AiFillEye } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import "./Internal-page.css"

export default function Olimpico() {

    const style = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            
            <div className="internal-page" style={style}>
            <Button className="page-backbtn" href="#/portfolio">
                <TiArrowBack />
            </Button>
                <Card className="page-card" body>
                    <h2>Soccer manager</h2>
                    <hr />
                    <p>
                        This is a personal project I started early 2022. It has been in my mind since I was studing at university around 2006, was based in the online game Hattrick. Using the latests technologies I want to build a online soccer game manager where a fan of this sport game can be the owner of the team and its players where using his soccer knownledge and the attributes of the players can match other gamers in a field simulator game.
                    </p>
                    <Row className="mb-4">
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Status" info="Under development">
                                <GiNotebook size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Worked on" info="Feb/2022">
                                <BsCalendar3 size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Techologies" info="Azure, Flutter, C#">
                                <GrCloudComputer size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Public" info="Yes(Alpha)">
                                <AiFillEye size={36} />
                            </ProjectCardInfo>
                        </Col>
                    </Row>
                    <h3>Problem</h3>
                    <p>
                        The game industry is changing and evolving, but in many cases the classics games keep been valid for a lot of gamers out there. One of them are the soccer manager style games where you own and manage your team. This kind of game you can be played on any kind of device, so this project wants to bring that kind of games to everyone with new technologies and platforms. This games is designed to be enjoyable with friend and people around the world.
                    </p>
                    <h3>Solution</h3>
                    <Row className="mb-4">
                        <Col className="mx-auto">
                            <Image className="mid-size-img" src={arch} />
                        </Col>
                    </Row>
                    <p>
                        The architecture of this game consist of the client - server model. The server side uses a NoSQL database and WebApps provisioned by a PaaS model for scalability purposes. The client is implemented by the Flutter techology who allow us to deploy in a lot of client technologies like desktop, web and mobiles. The implementation uses SOLID best practices, so code design is focus on code services with a dependency injector engine who force the dependency inversion principle. 
                    </p>
                    <h3>Pictures</h3>
                    <Row className="mb-4">
                        <Col xs={12} md={4}>
                            <Image src={a1} />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src={a2} />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src={a3} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <Image src={a4} />
                        </Col>
                    </Row>
                    <h3>Access to pre-alpha version</h3>
                    <p>
                    This game is in a early alpha version. The game was designed to run over web, desktop and mobile. Currently there is a web version for testing purposes so if you want to check it out please contact me to give the access. You can click <a href="#/contact">here</a> to email me.
                    </p>
                </Card>



            </div>
        </>

    );
}