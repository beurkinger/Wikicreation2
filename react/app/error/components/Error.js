import React from 'react';

import Link from 'react-router/lib/Link';

const error = (props) => (
  <main id="main-container">
    <div id="main-content" className="full-size">
      <div id="error-main">
        <div className="error-container">
          <h2 className="error-404">
            404
          </h2>
          <div className="error-right">
            <h3 className="error-sorry">
              Nous sommes désolés
            </h3>
            <p className="error-message">
              La page que vous cherchez <br/>
              n’est pas disponible
            </p>
            <Link to="/" className="btn btn-red btn-arrow-left error-button">
              Revenir au site
            </Link>
          </div>
        </div>
      </div>
    </div>
  </main>
);

module.exports = error;
