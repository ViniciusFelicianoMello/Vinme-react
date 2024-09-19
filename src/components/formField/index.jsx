/* eslint-disable react/prop-types */
import './formField.sass'

const FormField = ({ type, labelFor, label, icon, input, textarea, select, options, value, onChange }) => {
    return (
        <div className='form_field'>
            {input && (
                <input type={type} name={labelFor} id={labelFor} value={value} onChange={onChange} required />
            )}
            {textarea && (
                <textarea name={labelFor} id={labelFor} value={value} onChange={onChange} required></textarea>
            )}
            {select && (
                <select name={labelFor} id={labelFor} value={value} onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            )}

            <i className={icon}></i>
            <label htmlFor={labelFor}>{label}</label>
            <span></span>
        </div>
    )
}

export default FormField