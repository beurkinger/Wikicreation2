import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import CommitteeAside from './CommitteeAside';
import CommitteeContent from './CommitteeContent';

const Committee = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.updateTitlebar(this.props);
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  updateTitlebar : function (props) {
    this.props.setTitlebar(props.title);
  },
  render: () => (
    <main id="main-container">
      <CommitteeAside />
      <CommitteeContent />
    </main>
  )
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.committee.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Committee);
