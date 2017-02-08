import React from 'react';
import {connect} from 'react-redux';

import Member from './Member';

const CommitteesContent = React.createClass({
  propTypes : {
    editorialCommittee : React.PropTypes.array.isRequired,
    readingCommittee : React.PropTypes.array.isRequired,
    scientificCommittee : React.PropTypes.array.isRequired
  },
  getMember : (name, index) => <li key={index}>{name}</li>,
  getFullMember : (member, index) => <Member key={index} name={member.name} desc={member.desc} />,
  render: function () {
    console.log(this.props);
    return (
      <div id="main-content">
        <div id="committee-main">
          <h3 id="editorial">
            Comité de rédaction
          </h3>
          <div className="members-full">
            {this.props.editorialCommittee.map(this.getFullMember)}
          </div>
          <h3 id="reading">
            Comité de lecture
          </h3>
          <p>
            Ce Comité de lecture internationnal et pluridisciplinaire est chargé d’évaluer en double aveugle la rigueur scientifique de chaque article et sa conformité au projet éditorial relationniste de WikiCreation.
          </p>
          <ul className="members">
            {this.props.readingCommittee.map(this.getMember)}
          </ul>
          <h3 id="scientific">
            Comité scientifique
          </h3>
          <div className="members-full small">
            {this.props.scientificCommittee.map(this.getFullMember)}
          </div>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (store) => ({
  editorialCommittee : store.committees.editorial,
  readingCommittee : store.committees.reading,
  scientificCommittee : store.committees.scientific,
});

module.exports = connect(mapStateToProps)(CommitteesContent);
