import React from 'react';

const Downloads = (props) => {
  const getPdfFr = function () {
    if (props.pdfFr !== '') return (
      <a href={props.pdfFr} target="_blank">
        <div className="download fr"></div>
      </a>
    )
  };
  const getPdfEn = function () {
    if (props.pdfEn !== '') return (
      <a href={props.pdfEn} target="_blank">
        <div className="download en"></div>
      </a>
    )
  };
  return (
    <div className="downloads">
      { getPdfFr() }
      { getPdfEn() }
    </div>
  )
};

Downloads.propTypes = {
  pdfFr : React.PropTypes.string.isRequired,
  pdfEn : React.PropTypes.string.isRequired
}

module.exports = Downloads;
