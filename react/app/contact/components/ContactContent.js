import React from 'react';

const ContactContent = React.createClass({
  render: () => (
    <div id="main-content">
      <article id="contact-main">
        <div id="contact-body">
          <div className="ms-logo"></div>
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
        </div>
        <form id="contact-form">
          <textarea defaultValue="Message"></textarea>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Mail" />
        </form>
      </article>
    </div>
  )
});

module.exports = ContactContent;
