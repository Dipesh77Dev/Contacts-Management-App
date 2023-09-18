import React from 'react';
import { Link } from 'react-router-dom';

const notFound = {
    position: 'fixed',
    top: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const NotFound = () => {
    return (
        <React.Fragment>
            <div style={notFound}>
                <h1 className="display-1">Page Not Found</h1>
            </div>
        </React.Fragment>
    )
}

export default NotFound;

