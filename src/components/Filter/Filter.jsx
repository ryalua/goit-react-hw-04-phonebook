import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelFilter } from './FilterStyled';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
    this.props.onFilter(event.currentTarget.value);
  };

  render() {
    return (
      <div>
        <LabelFilter className="label-name">Find contacts by name</LabelFilter>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={event => this.handleFilter(event)}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  filter: PropTypes.string,
};
