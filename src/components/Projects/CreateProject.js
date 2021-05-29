import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux';

function CreateProject({createProject, history}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const project = {
            title,
            content
        };

        createProject(project, history);
    }


    return (
        <div className='container'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h5 className='gray-text text-darken-3'>Create a new project</h5>
                <br/>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={e => setTitle(e.target.value)} value={title} />
                </div>

                <div className='input-field'>
                    <label htmlFor='content'>Content</label>
                    <textarea className='materialize-textarea' id='content' onChange={e => setContent(e.target.value)} value={content}></textarea>
                </div>

                <div className='input-field'>
                    <button className='btn pink lighten-1'>Create Project</button>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createProject: (project) => dispatch(createProject(project, ownProps.history))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
