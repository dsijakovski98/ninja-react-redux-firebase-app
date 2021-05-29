import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../Projects/ProjectList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

function Dashboard({loading, projects, error}) {

    return (   
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    {
                        loading 
                        ?   'Loading'
                        :   error === ''
                            ?   <ProjectList projects={projects} />
                            :   <h3>{error}</h3>
                    }
                </div>

                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.project.loading,
        projects: state.firestore.ordered.projects,
        error: state.project.error,
    }
}

export default compose(
    connect(mapStateToProps), firestoreConnect( [{ collection: 'projects', orderBy: ['createdAt', 'desc'] }] )
)(Dashboard)
