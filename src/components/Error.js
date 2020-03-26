import React from 'react'
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return (
        <p className="red darken-2 error">{message}</p>
    )
}

Error.propTypes = {
    message: PropTypes.object.isRequired
}

export default Error