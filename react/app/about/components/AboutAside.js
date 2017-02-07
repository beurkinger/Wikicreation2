import React from 'react';

const AboutAside = React.createClass({
  render: () => (
    <aside id="main-aside">
        <a className="nav-link"  href="#presentation">
          Présentation de la publication
        </a>
        <a className="nav-link" href="#project">
          Un projet éditorial relationnel
        </a>
        <a className="nav-link" href="#editor">
          Editeur
        </a>
    </aside>
  )
});

module.exports = AboutAside;
