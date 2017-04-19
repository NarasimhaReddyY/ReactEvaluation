import { connect } from 'react-redux'
import ResourceHandler from '../ResourceHandler.jsx'
import { setResources, setResource, setArticles } from '../actions/index.jsx'

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
    resource: state.resource,
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

const ResourceHandlerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceHandler)

export default ResourceHandlerContainer
