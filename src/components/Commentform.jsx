import './commentform.css'

function Commentform({ label, error, className, id, name, placeholder, ...props}) {

    const isInvalid = !!error;


    return (
        <div className="direct">                                  
            <label className="cf-label" htmlFor={id}>
                {label}
                <span className={`req ${isInvalid ? 'show' : ''}`} aria-hidden="true">
                *
                </span>
            </label>
            <textarea className={`input ${className} ${isInvalid ? 'is-invalid' : ''}`} name={name} id={id} {...props} placeholder={placeholder} aria-invalid={isInvalid} />
            {isInvalid && <span className="error">{error}</span>}
        </div>
    )
}

export default Commentform