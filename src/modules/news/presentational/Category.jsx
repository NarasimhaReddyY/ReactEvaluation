import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default function Category({ name, handleOnClick }) {
  return (
    <li
      value={name}
      onClick={handleOnClick}
    >
      {_.upperCase(name)}
    </li>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
