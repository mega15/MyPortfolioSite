import { Button, Card, Col, Row, Image } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { TiArrowBack } from "react-icons/ti";
import ProjectCardInfo from "../components/ProjectCardInfo";

import background from "../img/bg4.jpg"
import arch from "../img/cloudautomation/arch.png"

import "./Internal-page.css"

export default function CloudAutomation(){

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
                <h2>Cloud tests automation</h2>
                    <hr />
                    <p>
                        This is a project for enabling test automation for a couple of web products using the IaaS offered by the Azure cloud. Using Python, Azure Automation, virtual machines, kubernetes and containers were possible to provisioned a ready to be tested environment and with Visual Studio Online (also known as Visual Studio DevOps) execute a range of tests who perform a complete functional coverage looking for the stability in a set of products.
                    </p>
                    <Row className="mb-4">
                        <Col xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Status" info="In production">
                                <GiNotebook size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Worked on" info="2021 - Now">
                                <BsCalendar3 size={36} />
                            </ProjectCardInfo>
                        </Col>
                        <Col  xs={12} md={6} xl={3}>
                            <ProjectCardInfo title="Techologies" info="Azure, Python, Powershell, Terraform">
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
                        Testing is a key phase in software development. The problem with this phase is because while a product is coded and mantained this phase must be executed again and again. If the product owner wants a complete coverage of the app functionallity manual tests are not an option. Because of this problem is necesary to search for an automatic solution for quality assurance. We have to keep in mind that the solution must scale and mantain low costs.
                    </p>
                    <h3>Solution</h3>
                    <Row className="mb-4">
                        <Col className="mx-auto">
                            <Image className="mid-size-img" src={arch} />
                        </Col>
                    </Row>
                    <p>
                        This is not an app or a platform itself. This is just a set of configurations, tools, components and apps that when all are put together and orchectrated can create a perfect test environment to ensure the quality of a web products. The following steps describe how the cloud automation is performed:
                    </p>
                    <ol>
                            <li>A user or schedule launch a Cloud runbook that communicate within a virtual machine and launch a python program</li>
                            <li>The python program using Terraform creates a set of servers with the software to be tested</li>
                            <li>At the same time the python program launch the creation of agents using Kubernetes platform</li>
                            <li>When all is ready VSO launch a set of pipelines for perform the testing</li>
                            <li>Each pipeline is a project that test a complete functionallity of the product and is executed in a custom agent</li>
                            <li>Finally a reviewer checks each failed test to validate if there is a bug to be reported</li>
                        </ol>
                    <p>I wasn't the creator of this model but I worked as a active member. At this moment I am the responsable of maintain and improve it. This model requires a set of technologies and knownledges in Azure to be maintained</p>
                    <h3>Achievements</h3>
                    <ul>
                            <li>Test a set of web applications automaticly using the cloud</li>
                            <li>Execute each day non stop more than 100 hours of testing</li>
                            <li>Run before first hours of the day a complete functional coverage of the application</li>
                            <li>Reduce in 60% of the azure cost by optimizing the platform</li>
                        </ul>  
                    </Card>
            </div>
        </>
    );
}