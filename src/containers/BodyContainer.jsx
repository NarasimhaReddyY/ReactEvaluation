import { connect } from 'react-redux'
import Body from '../components/Body.jsx'
import { setCategories, setCategory } from '../actions/index.jsx'

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    category: state.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (event) => {
      dispatch(setCategory(event.currentTarget.getAttribute('value')))

      _.forEach(event.target.parentNode.children, function(element) {
          element.classList.remove("active");
      });
      
      event.target.className = "active";
    },

    setCategories: (categories) => {
      dispatch(setCategories(categories));
    }
  }
}

const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)

export default BodyContainer
