import React,{useState} from 'react'
import PropTypes from 'prop-types';


const Form = ({setSearch, search, setConsult}) => {


   

    const [error, setError] = useState(false);

    const {city,country} = search;

    const handelChange = e => {

        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handelSubmit = e => {
        e.preventDefault();
        
        if(city.trim()===''|| country.trim()===''){
            setError(true);
            return;
        }
        setError(false);
        setConsult(true);
    }

    return (
        <form
            onSubmit={handelSubmit}
        >
            {error ? <p className="red darken-2 error">All fields are required</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city" 
                    id="city"
                    value={city}
                    onChange={handelChange}
                />
                <label htmlFor="city">City</label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="country"
                    id=""
                    value={country}
                    onChange={handelChange}
                >
                    <option value="">-- Select a country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="DR">Republica Dominicana</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country</label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Search Weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

Form.propTypes = {
    setSearch: PropTypes.func.isRequired,
    setConsult: PropTypes.func.isRequired,
    search: PropTypes.object.isRequired
}
export default Form
