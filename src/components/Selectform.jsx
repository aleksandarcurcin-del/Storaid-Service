import './Selectform.css'

function Selectform({ label, error, className, id, name,  ...props }) {

    const isInvalid = !!error;

    return (
        <div className="direct">                                  
            <label className="cf-label" htmlFor={id}>{label}
                <span className={`req ${isInvalid ? 'show' : ''}`} aria-hidden="true">
                    *
                </span>
            </label>
            
            <select
                className={`select-form ${isInvalid ? 'is-invalid' : ''}`}
                id={id}
                name={name}
                {...props}
                aria-invalid={isInvalid}
            >
                <option value="">Select unit</option>
                <option value="1">Small unit</option>
                <option value="2">Medium unit</option>
                <option value="3">Large unit</option>
                <option value="4">Executive unit</option>
            </select>
            {isInvalid && <span className="error">{error}</span>}
        </div>
    )
}

export default Selectform