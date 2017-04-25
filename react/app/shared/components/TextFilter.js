import React from 'react';

const TextFilter = React.createClass({
  propTypes : {
    label : React.PropTypes.string,
    value : React.PropTypes.string.isRequired,
    handleChange : React.PropTypes.func.isRequired,
    delay : React.PropTypes.number,
    minChar : React.PropTypes.number
  },
  getDefaultProps: () => ({ delay : 750, minChar : 4 }),
  getInitialState : function () {
    return { value : this.props.value }
  },
  componentWillMount : function () {
    this.timeout = null
  },
  componentWillUnmount : function () {
    if (this.timeout) clearTimeout(this.timeout)
  },
  componentWillReceiveProps : function (nextProps) {
    this.setState ({ value : nextProps.value})
  },
  handleTextChange : function (e) {
    let value = e.target.value;
    this.setState({ value : value });
    if (value.length !== 0 && value.length < this.props.minChar) return;
    this.delayedPropsUpdate(value);
  },
  delayedPropsUpdate : function (value) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() =>
    {
      this.props.handleChange(value);
    }, this.props.delay);
  },
  render : function () {
    return (
      <form className="search-form">
        <input  className="search-field"
                value={this.state.value}
                placeholder={this.props.label ? this.props.label : 'Ecrire pour filtrer'}
                onChange={this.handleTextChange} />
        <div className="search-btn"></div>
      </form>
    )
  }
});

module.exports = TextFilter;
