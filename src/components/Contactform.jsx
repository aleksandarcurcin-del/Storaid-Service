import './Contactform.css'


function Contactform({ label, error, className, id, type, name, placeholder,  ...props}) {

    const isInvalid = !!error;
    
    return (
        
        <div className="direct">                                  
            <label className="cf-label" htmlFor={id}>{label}
                <span className={`req ${isInvalid ? 'show' : ''}`} aria-hidden="true">
                    *
                </span>
            </label>
            <input className={`input ${className} ${isInvalid ? 'is-invalid' : ''}`} id={id} type={type} name={name} {...props} placeholder={placeholder} aria-invalid={isInvalid}/>
            {isInvalid && <span className="error">{error}</span>}
        </div>

    )
}

export default Contactform