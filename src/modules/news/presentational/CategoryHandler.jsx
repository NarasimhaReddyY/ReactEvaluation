import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Category from './Category.jsx';

export default function CategoryHandler({ categories, handleOnClick }) {
  const categoryComponents = _.map(categories,
    (name, index) => {
      return (
        <Category
          key={index}
          name={name}
          handleOnClick={handleOnClick}
        />
      );
    },
  );

  return (
    <ul>
      {categoryComponents}
    </ul>
  );
}

CategoryHandler.propTypes = {
  categories: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
