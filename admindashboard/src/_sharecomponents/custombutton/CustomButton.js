import './CustomButton.css'
const CustomButton = (props) => {
    const { label, width, uppercase, color, type,...otherProps} = props
    
    return (
        <div className='cus-button'>
            <button
                className="cus-details-button"
                style={{
                    width: width ? width : '100%',
                    textTransform: uppercase ? 'uppercase' : 'none',
                    background: color? color: null
                }}
                type={type}
                {...otherProps} 
                
            >
                {/* {label} */}
                {props.children}
            </button>
        </div>
    )
}
export default CustomButton