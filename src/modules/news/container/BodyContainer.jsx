import { connect } from 'react-redux'
import Body from '../presentational/Body.jsx'
import ResourceHandler from '../presentational/ResourceHandler.jsx'
import getCategoriesAPI from '../../../api_calls/getCategoriesAPI.jsx';
import getResourcesAPI from '../../../api_calls/getResourcesAPI.jsx';
import getArticlesAPI from '../../../api_calls/getArticlesAPI.jsx';

import { 
  setCategories,
  setCategory,
  setResources,
  setResource,
  setArticles 
} from '../../../actions/index.jsx'

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    category: state.category,
    resources: state.resources,
    resource: state.resource,
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    //TODO: Refactor this code.
    setCategory: (event) => {
      dispatch(setCategory(event.currentTarget.getAttribute('value')))

      _.forEach(event.target.parentNode.children, function(element) {
          element.classList.remove("active");
      });
      
      event.target.className = "active";
    },

    setCategories: () => {
      dispatch(getCategoriesAPI());
    },
    setResource: (event) => {
      dispatch(setResource(event.target.value))
    },
    setResources: (category) => {
      dispatch(getResourcesAPI(category));
    },
    setArticles: (resource) => {
      dispatch(getArticlesAPI(resource));
    }
  }
}

const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)

export default BodyContainer
