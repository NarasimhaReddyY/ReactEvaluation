import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';

export default function SelectBox({ sources, handleOnSelect }) {
  const options = [{ value: '', label: 'Please Select' }];

  _.forEach(sources, (source) => {
    options.push({
      value: source,
      label: _.upperCase(source),
    });
  });

  return (
    <Formsy.Form
      onChange={handleOnSelect}
    >
      <Select
        name="source"
        label="Select a source"
        options={options}
        required
      />
    </Formsy.Form>
  );
}

SelectBox.propTypes = {
  sources: PropTypes.array.isRequired,
  handleOnSelect: PropTypes.func.isRequired,
};

SelectBox.defaultProps = {
  sources: [],
  handleOnSelect: '',
};
