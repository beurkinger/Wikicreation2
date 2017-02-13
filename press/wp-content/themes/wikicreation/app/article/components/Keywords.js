import React from 'react';
import { connect } from 'react-redux';

const Keywords = (props) => {
  let str = '';
  if (typeof props.array === "object" && props.array.length > 0) {
    str = props.array.join(', ');
  }
  else {
    str = props.empty;
  }
  return <span>{str}</span>;
};

Keywords.propTypes = {
  array : React.PropTypes.array,
  empty : React.PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  empty : store.messages.strings.article.keywords.empty,
});

module.exports = connect(mapStateToProps)(Keywords);
