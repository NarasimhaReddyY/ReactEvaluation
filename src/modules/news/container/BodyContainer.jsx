import { connect } from 'react-redux';
import _ from 'lodash';
import getCategoriesAPI from '../../../api_calls/getCategoriesAPI.jsx';
import getResourcesAPI from '../../../api_calls/getResourcesAPI.jsx';
import getArticlesAPI from '../../../api_calls/getArticlesAPI.jsx';
import {
  setCategory,
  setResource,
} from '../../../actions/index.jsx';
import Body from '../presentational/Body.jsx';


const mapStateToProps = state => ({
  categories: state.categories,
  category: state.category,
  resources: state.resources,
  resource: state.resource,
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  setCategory: (event) => {
    dispatch(setCategory(event.currentTarget.getAttribute('value')));

    //  TODO: Refactor this code.
    //  This part will remove while adding better CSS.
    _.forEach(event.target.parentNode.children, (element) => {
      element.classList.remove('active');
    });

    event.target.className = 'active';
  },

  setCategories: () => {
    dispatch(getCategoriesAPI());
  },
  setResource: (event) => {
    dispatch(setResource(event.target.value));
  },
  setResources: (category) => {
    dispatch(getResourcesAPI(category));
  },
  setArticles: (resource) => {
    dispatch(getArticlesAPI(resource));
  },
});

const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);

export default BodyContainer;
