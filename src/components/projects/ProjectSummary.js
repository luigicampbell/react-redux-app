import React from 'react';
import './ProjectSummary.css';
const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary opac">
            <div className="boxshadow card-content grey-text text-darken-3">
                <span className="card-title">{ project.title }</span>
                <p>Posted by LC</p>
                <p className="grey-text">DATE</p>
            </div>
        </div>
    );
}

export default ProjectSummary;