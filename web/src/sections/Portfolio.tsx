import { Col, Row } from "react-bootstrap";

import autoPlatform from "./../img/Platform.png";
import olimpico from "./../img/Olimpico.jpg";
import portfolio from "./../img/Portfolio.jpg";
import devops from "./../img/AutomationDevOps.png";

import "./Portfolio.css"
import { Link } from "react-router-dom";

export default function Portfolio() {

    const styleAutoPlatform = {
        backgroundImage: `url(${autoPlatform})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const styleOlimpico = {
        backgroundImage: `url(${olimpico})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const stylePortfolio = {
        backgroundImage: `url(${portfolio})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const styleDevops = {
        backgroundImage: `url(${devops})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="portfolio-section">
            <Row>
                <Col className="portfolio-project-contaner" xs={12} md={8}>
                    <div className="portfolio-project" style={styleOlimpico} >
                        <Link to="/olimpico">
                            <span>Soccer manager game<br />(Under development)<br /><strong>DEV</strong></span>
                        </Link>

                    </div>
                </Col>
                <Col className="portfolio-project-contaner" xs={12} md={4}>
                    <Link to="/cloudautomation">
                        <div className="portfolio-project" style={styleDevops} >

                            <span>Automatic tests on cloud<br /><strong>DEV|LEAD|DEVOPS</strong></span>
                        </div>
                    </Link>

                </Col>
            </Row>
            <Row>
                <Col className="portfolio-project-contaner" xs={12} md={6}>
                    <Link to="/automationplatform">
                        <div className="portfolio-project" style={styleAutoPlatform} >
                            <span>Quality assurance automation platform<br /><strong>DEV|DEVOPS</strong></span>
                        </div>
                    </Link>
                </Col>
                <Col className="portfolio-project-contaner" xs={12} md={6}>
                    <Link to="/portfoliosite">
                        <div className="portfolio-project" style={stylePortfolio} >
                            <span>Portfolio site<br />(this site)<br /><strong>DEV</strong></span>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}