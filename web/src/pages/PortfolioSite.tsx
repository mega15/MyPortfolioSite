import { Button, Card, Col, Row, Image } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { TiArrowBack } from "react-icons/ti";
import ProjectCardInfo from "../components/ProjectCardInfo";

import background from "../img/bg3.jpg"
import code from "../img/portfoliopage/code.jpg"
import browser from "../img/portfoliopage/browser.jpg"

import "./Internal-page.css"

export default function PortfolioSite(){

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
                <h2>Portfolio Page</h2>
                    <hr />
                    <p>
                        This is a web site showing my public portfolio. Here are some of the projects where I have been working since a couple or years. I have to mention there are a lot of more projects but these only reflects I am a full-stack developer. This site was a Sinlge page application using React a client side framework.  
                    </p>
                    <Row className="mb-4">
                        <Col xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Status" info="In production">
                                <GiNotebook size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Worked on" info="2022">
                                <BsCalendar3 size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Techologies" info="Azure, React, Typescript">
                                <GrCloudComputer size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Public" info="Yes">
                                <AiFillEye size={36} />
                            </ProjectCardInfo>
                        </Col>
                    </Row>
                    <h3>Problem</h3>
                    <p>
                        Just want to publish my work...
                    </p>
                    <h3>Solution</h3>
                    <Row className="mb-4">
                        <Col xs={12} md={6}>
                            <Image src={code} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Image  src={browser} />
                        </Col>
                    </Row>
                    <ul>
                            <li>HTML 5 Web page</li>
                            <li>Created using React client framework</li>
                            <li>Single Page Application</li>
                            <li>Responsive</li>
                            <li>Made using Visual Studio Code</li>
                        </ul>
                        <h3>Check the code</h3>
                    <p>
                    If you want to check this code please go to my github, click <a href="https://github.com/mega15/MyPortfolioSite" target="_blank" rel="noopener noreferrer">here</a> (master branch).
                    </p>
                    </Card>
            </div>
        </>
    );
}