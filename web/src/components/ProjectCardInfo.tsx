import { Card, Col, Image, Row } from "react-bootstrap";

import "./ProjectCardInfo.css"

export default function ProjectCardInfo(props: { title: string, info: string, children:JSX.Element }) {

    return (
        <>
            <Card className="project-card-info" body>
                <Row>
                    <Col className="text-center" xs={12} md={3}>
                        {props.children}
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col><label>{props.title}</label></Col>
                        </Row>
                        <Row>
                            <Col><span>{props.info}</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    );
}