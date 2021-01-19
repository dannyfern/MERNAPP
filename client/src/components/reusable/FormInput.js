import React from 'react'
import PropTypes from 'prop-types'


const FormInput = ({ type = "text", name, value, onChange, accept, className, minLength, placeholder, required=false }) => {
    return <input type={type} name={name} value={value} onChange={onChange} accept={accept} className={className} minLength={minLength} placeholder={placeholder} required={required} />
}

FormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
}




export default FormInput