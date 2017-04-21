import _ from 'lodash';
import axios from 'axios';
import { setResources } from '../actions/index.jsx';

export default function getResourcesAPI(category) {
  return function (dispatch) {
    axios.get('https://newsapi.org/v1/sources',
      {
        params: { category },
      },
    )
    .then(
      (response) => {
        const sources = [];
        _.forEach(response.data.sources, (object) => {
          sources.push(object.id);
        });

        dispatch(setResources(sources));
      },
    );
  };
}
