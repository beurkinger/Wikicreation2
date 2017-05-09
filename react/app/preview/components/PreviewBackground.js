import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {hidePreviewPanel} from '../actions';

class PreviewBackground extends React.Component {
  render () {
    return (
      <div  style={{ display : this.props.isPreviewVisible ? 'block' : 'none' }}
            id="article-preview-background"
            onClick={this.props.hidePreviewPanel}></div>
    )
  }
}

PreviewBackground.propTypes = {
  hidePreviewPanel : PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({ isPreviewVisible : store.previewPanel.isVisible });

const mapDispatchToProps = (dispatch) => ({
  hidePreviewPanel: () => dispatch(hidePreviewPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(PreviewBackground);
