import { Button, Card, Col, Row, Image } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { TiArrowBack } from "react-icons/ti";
import ProjectCardInfo from "../components/ProjectCardInfo";

import background from "../img/bg2.jpg"
import arch from "../img/autiomationplatform/arch.png"

import "./Internal-page.css"
import ReactPlayer from "react-player";

export default function AutomationPlatform() {

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
                <h2>QA Automation platform</h2>
                    <hr />
                    <p>
                        This was a personal innovation to one of my employers. Looking for the needed of improve quality over a product where the market doesn't ofer any automatic solution for testing a desktop software I built a platform where can launch a couple of automatic tests to check the stability od the desktop application. Powered by the azure cloud platform this development can create a ready to test environment using virtual machines to the test in background hundreds of hours of testing an app.
                    </p>
                    <Row className="mb-4">
                        <Col xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Status" info="In production">
                                <GiNotebook size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Worked on" info="2019 - Now">
                                <BsCalendar3 size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Techologies" info="Azure, C#, Javascript, JQuery, Terraform">
                                <GrCloudComputer size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Public" info="No">
                                <AiFillEye size={36} />
                            </ProjectCardInfo>
                        </Col>
                    </Row>
                    <h3>Problem</h3>
                    <p>
                        Some time ago one of the key company products had several quality problems and there wasn't any tool helping in the QA process so every test was made using manual testing, so there were a lot of people doing functional tests that not covered all the functionallity and takes a lot of time to be completed. Also looking in the market any offered tools match the specific needs of the product then can't be used for automation. One major problem was the product is a desktop application so to be tested need used the a desktop environment then the host machine become unavailable while the test remains (differently of simillar web products where they could be executed silently or headless). 
                    </p>
                    <h3>Solution</h3>
                    <Row className="mb-4">
                        <Col className="mx-auto">
                            <Image className="mid-size-img" src={arch} />
                        </Col>
                    </Row>
                    <p>
                        Innovating is a key aspect of the modern enterprises, so companies that facilitate the innovation assure the long term of success. When I saw the problem I ask my manager and leader to give me two weeks to showed them a innovation I had in mind. At the end I show them the QA Automation Platform, product I developed and enabled the test automation available for those kind of desktop porduct in a background execution host powered by virtual machine in Azure cloud.
                    </p>
                    <ul>
                            <li>The key aspect of the platform is thanks to the RDP (remote desktop protocol) can enable a remote desktop available for the tests executions</li>
                            <li>Terraform is the main provisioning component for the VM (virtual machines) creation</li>
                            <li>The platform has many components and systems but an important one is the test engine, application running on each VM (Virtual machine) that performs the test execution</li>
                        </ul> 
                    <h3>Achievements</h3>
                    <ul>
                            <li>Testing a desktop aplication without losing control of the user machine</li>
                            <li>Execute each day non stop more than 100 hours of testing</li>
                            <li>Run before first hours of the day a complete functional coverage of the application</li>
                            <li>Reduce in 70% of the azure cost by optimizing the platform</li>
                        </ul>  
                    <h3>Media</h3>
                    <Row className="mb-4">
                        <Col className="mx-auto">
                            <div className="mid-size-video">
                                <ReactPlayer width="100%" url='https://youtu.be/w9SfqYMdDJI' />
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
}