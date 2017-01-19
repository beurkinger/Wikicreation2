import React from 'react';

const CheckboxFilter = React.createClass({
  propTypes : {
    label : React.PropTypes.string.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    handleChange : React.PropTypes.func.isRequired
  },
  getInitialState : () => ({
    isChecked : false
  }),
  handleCheckboxChange : function () {
    this.setState({ isChecked : !this.state.isChecked})
    this.props.handleChange(this.props.value);
  },
  render : function () {
    return (
      <div className="filter">
        <input  type="checkbox"
                value={this.props.value}
                checked={this.state.isChecked}
                onChange={this.handleCheckboxChange} />
        {this.props.label}
      </div>
    )
  }
});

module.exports = CheckboxFilter;
