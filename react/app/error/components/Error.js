import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {setStdTitlebar} from '../../header/actions';


class Error extends React.Component {
  componentWillMount () {
    this.props.setTitlebar(this.props.title);
  }
  componentWillUpdate (nextProps) {
    this.props.setTitlebar(nextProps.title);
  }
  render () {
    return (
      <main id="main-container">
        <div id="main-content" className="full-size">
          <div id="error-main">
            <div className="error-container">
              <h2 className="error-404">
                {this.props.number}
              </h2>
              <div className="error-right">
                <h3 className="error-sorry">
                  {this.props.sorry}
                </h3>
                <p className="error-message">
                  {this.props.notFound}
                </p>
                <Link to="/" className="btn btn-red btn-arrow-left error-button">
                  {this.props.goBack}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

Error.propTypes = {
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  title : store.messages.strings.error.title,
  number : store.messages.strings.error.number,
  sorry : store.messages.strings.error.sorry,
  notFound : store.messages.strings.error.notFound,
  goBack : store.messages.strings.error.goBack
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Error);
