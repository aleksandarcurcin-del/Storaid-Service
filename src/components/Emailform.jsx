import './Emailform.css'

function Emailform({ label, error, className, id, type, name, placeholder,  ...props}) {

    
    
    return (
        
        <div className="direct">                                  
            <label className="email-label" htmlFor={id}>{label}
            </label>
            <input id={id} type={type} name={name} {...props} placeholder={placeholder} />
            <div className="email-error">Email is required</div>
            
        </div>

    )
}

export default Emailform