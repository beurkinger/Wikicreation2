import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {emptyTitlebar} from '../../header/actions';
// import {showPreviewPanel} from '../../preview/actions';
// import {getPreview} from '../../preview/async';
import Graph from './Graph';
import PageLoading from '../../shared/components/PageLoading';

class Home extends React.Component {
  componentWillMount () {
    this.props.emptyTitlebar();
  }
  // preview () {
  //   getPreview(1);
  //   this.props.showPreviewPanel();
  // },
  render () {
    return (
      <main id="main-container" className="graph-container">
        <PageLoading switches={[this.props.isDone]} />
        <Graph />
        <div id="home-logos">
          <img src="/wp-content/themes/wikicreation/img/logo-accueil-acte.png" className="logo"/>
          <img src="/wp-content/themes/wikicreation/img/logo-accueil-paris1.png" className="logo"/>
          <img src="/wp-content/themes/wikicreation/img/logo-accueil-cnrs.png" className="logo"/>
          <img src="/wp-content/themes/wikicreation/img/logo-accueil-labexcap.png" className="logo"/>
          <img src="/wp-content/themes/wikicreation/img/logo-accueil-mmi.png" className="logo"/>
        </div>
      </main>
    )
  }
}

Home.propTypes = {
  emptyTitlebar : PropTypes.func.isRequired,
  isDone : PropTypes.bool.isRequired
  // showPreviewPanel : PropTypes.func.isRequired,
};

// <btn style={{display : 'block', margin : '400px'}} onClick={this.preview} >yolo</btn>

const mapStateToProps = (store) => ({
  isDone : store.graphData.isDone
});

const mapDispatchToProps = (dispatch) => ({
  emptyTitlebar: () => dispatch(emptyTitlebar()),
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
