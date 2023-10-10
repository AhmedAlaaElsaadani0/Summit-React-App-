import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = ({ errorCode }) => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">Error {errorCode}</h1>
                <p className="error-message">Sorry, an error has occurred.</p>
                <Link to="/" className="error-button ">Go back to home page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
