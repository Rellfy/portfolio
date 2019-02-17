import * as React from 'react';

import HorizontalOverflow from './utils/horizontal_overflow';

interface IRCProps {
    content: {
        title: string;
        projects: IProject[]
    }
}

interface IRCState { }

export interface IProject {
    title: string;
    language: string;
    timespan: string;
    link: {
        text: string;
        url: string;
    } | undefined;
    description: string;
}

class ProjectContainer extends React.Component<IRCProps, IRCState> {

    private getProjectElement(project: IProject) {
        return (
            <div className={`project ${project.link != null ? 'with_link' : ''}`}>
                <div className="title">{ project.title }</div>
                <div className="language">{ project.language }</div>
                { project.link != null &&
                <div className="link" onClick={() => { window.open(project.link.url) }}>{ project.link.text }</div> }
                <div className="description">
                    { project.description }
                </div>
            </div>
        );
    }

    public render() {
        const elements = this.props.content.projects.map((project) => {
            return this.getProjectElement(project);
        });

        const scrollWidth = (window.innerWidth * 0.2165 > 190) ? (window.innerWidth * 0.2165) : 190;

        return (
            <HorizontalOverflow type="project_container"
                                title={this.props.content.title} 
                                scrollWidth={scrollWidth}
                                elements={elements} />
        );
    }
}

export default ProjectContainer;