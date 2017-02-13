import React from 'react';
import {connect} from 'react-redux';

import {hidePreviewPanel} from '../actions';

const PreviewBackground = React.createClass({
  propTypes : {
    hidePreviewPanel : React.PropTypes.func.isRequired
  },
  render : function () {
    return (
      <div  style={{ display : this.props.isPreviewVisible ? 'block' : 'none' }}
            id="article-preview-background"
            onClick={this.props.hidePreviewPanel}></div>
    )
  }
});

const mapStateToProps = (store) => ({ isPreviewVisible : store.previewPanel.isVisible });

const mapDispatchToProps = (dispatch) => ({
  hidePreviewPanel: () => dispatch(hidePreviewPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(PreviewBackground);
