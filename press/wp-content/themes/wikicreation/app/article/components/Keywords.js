import React from 'react';

module.exports = function (props) {
  let str = '';
  if (typeof props.array === "object" && props.array.length > 0) {
    str = props.array.join(', ');
  }
  else {
    str = "Aucun mot-clé n'a été défini pour cet article.";
  }

  return <span>{str}</span>;

};
