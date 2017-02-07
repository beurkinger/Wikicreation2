import React from 'react';

const CommitteeContent = React.createClass({
  render: () => (
    <div id="main-content">
      <div id="committee-main">
        <h3 id="#editorial">
          Comité de rédaction
        </h3>
        <h3 id="#reading">
          Comité de lecture
        </h3>
        <h3 id="#scientific">
          Comité scientifique
        </h3>
      </div>
    </div>
  )
});

module.exports = CommitteeContent;
