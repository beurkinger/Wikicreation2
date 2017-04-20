import React from 'react';
import { connect } from 'react-redux';

const Downloads = (props) => {
  const getPdfFr = () => {
    if (props.pdfFr && props.pdfFr !== '') return (
      <a href={'/' + props.pdfFr} target="_blank">
        <div className="download fr"></div>
      </a>
    )
  };
  const getPdfEn = () => {
    if (props.pdfEn && props.pdfEn !== '') return (
      <a href={'/' + props.pdfEn} target="_blank">
        <div className="download en"></div>
      </a>
    )
  };
  const getSorry = () => {
    if (!props.pdfFr && !props.pdfFr && !props.pdfEn && !props.pdfEn !== '') {
      return props.empty
    }
  };
  return (
    <div className="downloads">
      { getPdfFr() }
      { getPdfEn() }
      { getSorry() }
    </div>
  )
};

Downloads.propTypes = {
  pdfFr : React.PropTypes.string.isRequired,
  pdfEn : React.PropTypes.string.isRequired,
  empty : React.PropTypes.string.isRequired
}

const mapStateToProps = (store) => ({
  empty : store.messages.strings.article.aside.downloads.empty,
});

module.exports = connect(mapStateToProps)(Downloads);
