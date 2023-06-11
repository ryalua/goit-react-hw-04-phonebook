import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LabelFilter } from './FilterStyled';

export function Filter({ onFilter }) {
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
    onFilter(event.currentTarget.value);
  };

  return (
    <div>
      <LabelFilter className="label-name">Find contacts by name</LabelFilter>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={event => handleFilter(event)}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
