
import React from 'react';
import { SectionElement } from './models/sectionElement';
import './Section.css';

export default class  Section extends React.Component<{first:boolean, last:boolean, name:string, path:string, addSectionElement:(sectionElement:SectionElement) => void, children: JSX.Element}>{

    path = this.props.path;
    ref = React.createRef<Element>();

    componentDidMount(){
        this.props.addSectionElement({reference:this.ref, path:this.path});
    }
    
    render(){
        let elementClass = ["section", this.props.first ? "first-section" : "", this.props.last ? "last-section" : ""];

        return (
            <div id={this.props.name} ref={this.ref as React.RefObject<HTMLDivElement>} className={elementClass.join(" ")}>
                {this.props.children}
            </div>
        );
    }
}