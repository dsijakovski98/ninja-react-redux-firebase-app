import React from 'react';
import moment from 'moment';

function ProjectSummary({project}) {

    const timestamp = moment(project.createdAt.toDate()).startOf('day').fromNow();

    return (
        <div className='card project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'>{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className='grey-text'>{timestamp}</p>
                </div>
            </div>
    )
}

export default ProjectSummary
