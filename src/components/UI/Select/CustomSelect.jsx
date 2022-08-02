import React from 'react'
import PropTypes from 'prop-types'

function CustomSelect({ options, defaultVal = options[0] }) {
  return <div className="custom-select">{defaultVal}</div>
}

CustomSelect.defaultProps = {
  defaultVal: '',
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  defaultVal: PropTypes.string,
}

export default CustomSelect
