import {Col,Row, Table} from "react-bootstrap";

import "./Profile.css";

export default function Profile(){  
    return (
        <div  className="profile-section">
            <h2>About me</h2>
            <Row>
                <Col xs={12} md={8}><h4>Andres Mauricio Gonzalez Galindo</h4></Col>
                <Col xs={12} md={4}>
                    <Table cellSpacing={0} cellPadding={0}>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td><a href="mega15@gmail.com">Email me</a></td>
                            </tr>
                            <tr>
                                <td>Linkedin</td>
                                <td><a href="https://www.linkedin.com/in/andres-mauricio-gonzalez-galindo-98101950/?locale=en_US" target="_blank" rel="noopener noreferrer">andres-mauricio-gonzalez-galindo-98101950</a></td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Colombia</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="profile-topic" xs={12} md={4}>
                    Profile
                </Col>
                <Col xs={12} md={8}>
                    <p>
                    Along my sixteen years of experience working on software development I worked on console projects, native web projects, service-oriented projects, multi-languages web projects, mobile projects, automations test projects, platform solutions, multi-languages solutions, automation solutions and cloud solutions. Also I have experience on Windows, Linux, Azure cloud, C#, Python, Dart, Flutter, AngularJs, React, Node.js, Javascript, JQuery, Typescript, .NET Framework, NET CORE, Powershell, C, C++, JAVA, PHP, HTML, CSS, XML, JSON, YAML, SQL Server, CosmosDb, Oracle, MySql, Access, MongoDB, SOLID, TDD, BDD, SCRUM, CMMI, DevOps, Office, Terraform, ICR, OCR, BCR, BPM, Umbraco, Joomla, DotNetNuke, Bizagi, JMeter, Selenium and many others.
                    </p>
                    <p>
                    Currently I am leader of two teams, one focused on QA Automation and other to software development. In this role I have learned the importance of the team on the enterprise, so I always try to have a great team work, transfer my knowledge, and get the best of each team member.
                    </p>
                    <p>
                    Aside of this I am a passionate in my profession, so in my free time I like to try things like learn new technology, gaming, development games and crypto things.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="profile-topic" xs={12} md={4}>
                Operating systems and cloud
                </Col>
                <Col xs={12} md={8}>
                    <p>
                    Windows, Linux, Azure cloud, android
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="profile-topic" xs={12} md={4}>
                Programing languages
                </Col>
                <Col xs={12} md={8}>
                    <p>
                    C#, Python, Dart, Flutter, AngularJs, React, Node.js, Javascript, JQuery, Typescript, .NET Framework, NET CORE, Powershell, C, C++, VB.NET, JAVA, Oberon, Haskell, Prolog, PHP, Lua
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="profile-topic" xs={12} md={4}>
                Languages
                </Col>
                <Col xs={12} md={8}>
                    <p>
                    Spanish:Native | English:A1 | French:B1
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="profile-topic" xs={12} md={4}>
                Academic degree
                </Col>
                <Col xs={12} md={8}>
                    <p>
                    Computer science (master)
                    </p>
                </Col>
            </Row>
        </div>
        
    );
}