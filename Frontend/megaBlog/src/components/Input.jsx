import React,{useId} from 'react';

const Input = React.forwardRef(function Input({label,type='text',className='',...rest},ref) {
    const id = useId();
    return <div className={'w-full'}>
        {label && <label className={'inline-block pl-1 mb-1'} htmlFor={id}>{label}</label>}
        <input type={type} className={`${className}`} ref={ref} {...rest} id={id}/>
    </div>
})

export default Input;