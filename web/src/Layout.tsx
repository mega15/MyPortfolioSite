import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { SectionElement } from "./models/sectionElement";
import Section from "./Section";
import Sidebar from "./Sidebar";

import "./Layout.css"
import background from "./img/homebg.jpg";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

function Layout(){

  const style={
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};    

  const location = useLocation();
  const [sectionElements, setSectionElements] = useState<SectionElement[]>([]);

  let addSectionElement = (sectionElement:SectionElement) => {
    sectionElements.push(sectionElement);
    setSectionElements(sectionElements);
  }

  useEffect(() => {
    for(var count = 0; count < sectionElements.length;count++){
        if(sectionElements[count].path === location.pathname){
            let section = sectionElements[count];
            section.reference.current?.scrollIntoView({ block: 'start',  behavior: 'smooth', inline:    "start" });            
        }
    }
  });

    return (
        <>
        <Container fluid>
          
           <Row>
                 <Col xs={2} id="sidebar-wrapper" className="sidebar-wrapper">      
                   <Sidebar />
                 </Col>
                 <Col xs={10} id="page-content-wrapper" className="page-content-wrapper">
                   <div className="section-container" style={style}>
                    <Section first={true} last={false} name="home" path="/" addSectionElement={addSectionElement}>
                        <Home />
                      </Section>
                      <Section  first={false} last={false} name="profile" path="/profile" addSectionElement={addSectionElement}>
                        <Profile />
                      </Section>
                      <Section  first={false} last={false} name="portfolio" path="/portfolio" addSectionElement={addSectionElement}>
                        <Portfolio />
                      </Section>
                      <Section  first={false} last={true} name="contact" path="/contact" addSectionElement={addSectionElement}>
                        <Contact />
                      </Section>
                   </div>
                 </Col> 
             </Row>

         </Container>
        </>
    );
}

export default Layout;