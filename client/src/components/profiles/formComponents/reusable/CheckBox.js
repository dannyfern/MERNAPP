import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({ type = "checkbox", name, checked = false, onChange, key }) => {
    return <input type={type} name={name} checked={checked} onChange={onChange} key={key} />

    // return (
    //     <div>

    //     </div>
    // )
}

CheckBox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default CheckBox