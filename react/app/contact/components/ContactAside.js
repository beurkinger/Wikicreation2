import React from 'react';

const ContactAside = React.createClass({
  render: () => (
    <aside id="main-aside">
        <a className="nav-link"  href="#credits">
          Crédits
        </a>
        <a className="nav-link" href="#contact-form">
          Contact
        </a>
    </aside>
  )
});

module.exports = ContactAside;
