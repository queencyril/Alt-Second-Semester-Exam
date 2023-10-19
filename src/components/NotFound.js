import React from 'react'
import notFound from '../pageNotFound.png'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found!!!</h1>
      <p className="not-found-message">
        We're sorry, but the page you are looking for might not exist....
      </p>

      <h3>Please go back to previous page...</h3>
      <div className="error-image">
        <img src={notFound} alt="Page Not Found" />
      </div>
    </div>
  );
};

export default NotFound;