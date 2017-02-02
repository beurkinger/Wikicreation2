import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';

const About = React.createClass({
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
      <aside id="main-aside">
        <div className="info">
          <h2 className="info-title">
            Présentation de la publication
          </h2>
        </div>
        <div className="info">
          <h2 className="info-title">
            Un projet éditorial relationnel
          </h2>
        </div>
        <div className="info">
          <h2 className="info-title">
            Editeur
          </h2>
        </div>
      </aside>
      <div id="main-content">
        <article id="article-main">
          <div id="article-body">
            yolo
          </div>
        </article>
      </div>
    </main>
  )
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.contact.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(About);
