import _ from 'lodash';
import axios from 'axios';
import { setCategories } from '../actions/index.jsx';

export default function getCategoriesAPI() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: 'https://newsapi.org/v1/sources',
      data: {
        language: 'en',
      },
    })
    .then(
      (response) => {
        const uniqList = _.uniqBy(response.data.sources, 'category');
        const categories = [];

        _.forEach(uniqList, (object) => {
          categories.push(object.category);
        });
        dispatch(setCategories(categories));
      },
    );
  };
}
