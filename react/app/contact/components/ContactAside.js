import React from 'react';

const ContactAside = React.createClass({
  render: () => (
    <aside id="main-aside">
        <a className="nav-link">
          Crédits
        </a>
        <a className="nav-link">
          Contact
        </a>
    </aside>
  )
});

module.exports = ContactAside;
