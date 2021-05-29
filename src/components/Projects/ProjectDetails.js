import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

function ProjectDetails(props) {
    const id = props.match.params.id;

    useFirestoreConnect([
        { collection: 'projects', doc: id }
    ]);

    const projects = useSelector(state => state.firestore.ordered.projects);
    const project = projects && projects.length === 1 ? projects[0] : null;

    const timestamp = project && moment(project.createdAt.toDate()).calendar();

    return (
        project &&
        <div className='container section project-details'>
            <div className='card'>
                <div className='card-content'>
                    <span className='card-title'>{project.title}</span>
                    <p>{project.content}</p>
                </div>
                
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>{timestamp}</div>
                </div>

            </div>
        </div>
    )
}


export default ProjectDetails
