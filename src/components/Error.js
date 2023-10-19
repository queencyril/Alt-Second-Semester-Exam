import React from 'react';
import cuteCat from '../cuteCat.jpeg';

const ErrorBoundary = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">Oops! Something went wrong.</h1>
      <p className="error-message">
        We are sorry, but an error occurred. Our team has been notified, and
        we'll do our best to fix it as soon as possible.
      </p>

      <div className="error-image">
        <img src={cuteCat} alt="Cute Cat with an Apologetic Expression" />
      </div>
      <h3>Please go back to previous page or put in a wrong link to display a <span className='spanItem'>404</span> page...</h3>
    </div>
  );
};

export default ErrorBoundary;
