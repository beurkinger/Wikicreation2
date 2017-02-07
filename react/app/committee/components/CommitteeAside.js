import React from 'react';

const CommitteeAside = React.createClass({
  render: () => (
    <aside id="main-aside">
        <a className="nav-link"  href="#editorial">
          Comité de rédaction
        </a>
        <a className="nav-link" href="#reading">
          Comité de lecture
        </a>
        <a className="nav-link" href="#scientific">
          Comité scientifique
        </a>
    </aside>
  )
});

module.exports = CommitteeAside;
