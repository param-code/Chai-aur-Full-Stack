import React from 'react';

function Button({children,type='button',bgColor = 'bg-blue-500',textColor = 'text-white',className='', onClick, ...rest}) {
    return <Button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...rest}>{children}</Button>;
}

export default Button;