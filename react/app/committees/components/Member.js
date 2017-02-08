import React from 'react';

const Member = (props) => (
  <div className="member-full">
    <h4 className="name">
      {props.name}
    </h4>
    <p className="desc">
      {props.desc}
    </p>
  </div>
)

module.exports = Member;
