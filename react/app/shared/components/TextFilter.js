import React from 'react';
import PropTypes from 'prop-types';

class TextFilter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value : this.props.value }
    this.timeout = null;
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  componentWillUnmount () {
    if (this.timeout) clearTimeout(this.timeout)
  }
  componentWillReceiveProps (nextProps) {
    this.setState ({ value : nextProps.value})
  }
  handleTextChange (e) {
    let value = e.target.value;
    this.setState({ value : value });
    if (value.length !== 0 && value.length < this.props.minChar) return;
    this.delayedPropsUpdate(value);
  }
  delayedPropsUpdate (value) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() =>
    {
      this.props.handleChange(value);
    }, this.props.delay);
  }
  render () {
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
}

TextFilter.propTypes = {
  label : PropTypes.string,
  value : PropTypes.string.isRequired,
  handleChange : PropTypes.func.isRequired,
  delay : PropTypes.number,
  minChar : PropTypes.number
};

TextFilter.defaultProps = { delay : 750, minChar : 4 };

module.exports = TextFilter;
