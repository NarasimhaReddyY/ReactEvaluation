import { connect } from 'react-redux'
import Body from '../components/Body.jsx'
import ResourceHandler from '../components/ResourceHandler.jsx'
import { setCategories, setCategory, setResources, setResource, setArticles } from '../actions/index.jsx'

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

    setCategories: (categories) => {
      dispatch(setCategories(categories));
    },
    setResource: (event) => {
      dispatch(setResource(event.target.value))
    },
    setResources: (resources) => {
      dispatch(setResources(resources))
    },
    setArticles: (articles) => {
      dispatch(setArticles(articles))
    }
  }
}

const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)

export default BodyContainer
