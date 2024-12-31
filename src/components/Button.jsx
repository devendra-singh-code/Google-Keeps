import React, { forwardRef } from 'react'

const Button = ({type='', className='', children, ...props}, ref) => {
  return (
   <button type={type} ref={ref}
   className={`outline-none py-2 px-3  cursor-pointer bg-blue-800 rounded-lg ${className}`}
   {...props}
   >{children}</button>
  )
}

export default forwardRef(Button)
