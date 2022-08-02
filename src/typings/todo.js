import PropTypes from 'prop-types'

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.number.isRequired,
})
