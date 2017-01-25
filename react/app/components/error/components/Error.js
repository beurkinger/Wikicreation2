import React from 'react';

const error = (props) => (
  <main id="main-container">
    <div id="main-content" className="full-size">
      <div id="error-main">
        <div className="error-container">
          <h2 className="error-sorry">
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
            <div className="error-button">
              Revenir au site
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

module.exports = error;
