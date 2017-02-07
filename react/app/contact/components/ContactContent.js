import React from 'react';

const ContactContent = React.createClass({
  render: () => (
    <div id="main-content">
      <div id="contact-main">
        <div className="ms-logo" id="credits"></div>
        <h2 className="agency">
          Agence Multimédia Sorbonne
        </h2>
        <a href="http://multimedia-sorbonne.com/" className="website">
          multimedia-sorbonne.com
        </a>
        <div className="clearfix"></div>
        <h3>
          Directeur de projet
        </h3>
        <p>
          David Bihanic
        </p>
        <h3>
          Chef de projet
        </h3>
        <p>
          Alex Mohebbi
        </p>
        <h3>
          Directeurs artistiques / UX designers
        </h3>
        <p>
          Juanita Arenas <br/>
          Guillaume Ribault
        </p>
        <h3>
          Développeurs
        </h3>
        <p>
          Juanita Arenas <br/>
          Guillaume Ribault
        </p>
        <form id="contact-form">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Mail" />
          <textarea defaultValue="Message"></textarea>
          <btn className="btn btn-blue btn-plane">Envoyer</btn>
        </form>
      </div>
    </div>
  )
});

module.exports = ContactContent;
