import React from 'react'
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name, main} = result;

    if(!name) return null;



    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is : </h2>
                <p className="temperatura">
                    {parseFloat((main.temp * 9/5)-459.67, 10).toFixed(0)} <span>&#8457;</span>
                </p>
                <p>High: 
                    {parseFloat((main.temp_max * 9/5)-459.67, 10).toFixed(0)} <span>&#8457;</span>
                </p>
                <p>Low:
                    {parseFloat((main.temp_min * 9/5)-459.67, 10).toFixed(0)} <span>&#8457;</span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather
